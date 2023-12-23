import express from 'express'
import pg from 'pg'
import 'dotenv/config'
import cors from 'cors'
import bodyParser from 'body-parser';
import Stripe from 'stripe';

const app = express();
const port = 3005;
const stripe = Stripe(process.env.STRIPE_API_KEY);

const db = new pg.Client({
    user:process.env.DATA_BASE_USER,
    host:"localhost",
    database:process.env.DATA_BASE,
    password:process.env.DATA_BASE_PASSWORD,
    port:"5432",
})

db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));

app.use(cors({
    origin:"http://localhost:3000",
}))

app.listen(port, (req, res)=>{
    console.log(`app started on port ${port}`);
})

app.get('/admin', (req, res)=>{
    res.render('Admin.ejs');
})

app.get("/products", (req, res)=>{
    console.log("Getting products....");
    db.query('SELECT * FROM products', (err, data)=>{
    if(err){
        console.log('ERROR CAN NOT CONECT');
    }else{
        res.send(data.rows);
    }
    })
    
})

app.post("/register", (req, res)=>{

    const userData = {
        email : req.body.email,
        username : req.body.username,
        password : req.body.password,
        repasword : req.body.repasword,
        orders : []
    }
    console.log("Tester " + userData.password + " " + userData.repasword) ;
    if(userData.password === userData.repasword){

        db.query(`SELECT * FROM users WHERE email = '${userData.email}'`, (err, data)=>{
            if(err){
                console.log('ERROR CAN NOT CONECT');
                res.send({succes:false, error:"Error cant conect to the data base"});
            }else{
                console.log("REGISTERING....");
                if(data.rows.length == 0){
    
                    db.query('INSERT INTO users (name, password, email, orders) VALUES ($1, $2, $3, $4)', 
                    [userData.username, userData.password, userData.email, userData.orders]);
                    res.send({succes:true});
    
                }else{
    
                    console.log("USER ALLREADY REGISTER");
                    res.send({succes:false, error:"Error user allready register"});
    
                }
            }
        })
    }else{
        res.send({succes:false, error:"Error passwords don't match"});
    }
 
})

app.post("/login", (req, res)=>{

    let userEmail = req.body.email;
    let userPasword = req.body.password;

    db.query(`SELECT * FROM users WHERE email = '${userEmail}'`, (err, data)=>{
        if(err){
            console.log('ERROR CAN NOT CONECT');
            res.send({loged:false, error:"Error cant conect to the data base"});
        }else{
            if(data.rows != 0){
                if(data.rows[0].password == userPasword){
                    res.send({loged:true, userData:data.rows}); 
                }else{
                    res.send({loged:false, error:"Password or email incorrect"});
                }
            }else{
                res.send({loged:false, error:"That account does not exist"});
            }
        }

    })
});

app.post('/add-product', async (req, res)=>{
    let data = req.body;
    await db.query('INSERT INTO products ( name, image, description, price) VALUES ($1, $2, $3, $4)',
    [data.name, data.url, data.description, data.price]);
    res.render('Admin.ejs', {succes:"Added to the data base"});
})
app.post('/del-product', async (req, res)=>{
    let data = req.body;
    console.log(data.id + " my id");
    await db.query(`DELETE FROM products WHERE id=${data.id}`);
    res.render('Admin.ejs', {succes:"Deleted from the data base"});
})


app.post('/check-out', async(req, res)=>{
    console.log(req.body.items + " my items boy");
    let carItems = Object.keys(req.body.items);
    console.log('le car items ' + carItems);
    let lineItems = [];

    for(let i = 0; i<carItems.length; i++){
        if(req.body.items[carItems[i]] > 0){
            console.log('hyperloop '  + i);
            var productName = '';
            var productPrice = 0;

            const data = await db.query(`SELECT name, price FROM products WHERE id=${carItems[i]}`)
    
            productName = data.rows[0].name;
            productPrice = data.rows[0].price * 100;
            console.log(productName);
            console.log(productPrice);

            lineItems.push({
                price_data: {
                    currency:'cad',
                    product_data:{
                        name: productName
                    },
                    unit_amount:productPrice
                },
                quantity: req.body.items[carItems[i]]
            })
            console.log(lineItems + "being pushed");
        }
        
    }

    console.log("HyperTest " + lineItems[0]);

    const sesion = await stripe.checkout.sessions.create({
        payment_method_types:['card'],
        mode: 'payment',
        line_items: lineItems,
        success_url: `${process.env.CLIENT_URL}/payment-succes`,
        cancel_url: `${process.env.CLIENT_URL}/payment-error`,
    })
    res.send({url:sesion.url});
})


