import express from 'express'
import pg from 'pg'
import 'dotenv/config'
import cors from 'cors'
import bodyParser from 'body-parser';

const app = express();
const port = 3005;


const db = new pg.Client({
    user:process.env.DATA_BASE_USER,
    host:"localhost",
    database:process.env.DATA_BASE,
    password:process.env.DATA_BASE_PASSWORD,
    port:"5432",
})

db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

app.use(cors({
    origin:"http://localhost:3000",
}))

app.listen(port, (req, res)=>{
    console.log(`app started on port ${port}`);
})


app.get("/products", (req, res)=>{
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