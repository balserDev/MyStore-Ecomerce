import express from 'express'

const app = express();
const port = 3005;

app.listen(port, (req, res)=>{
    console.log(`app started on port ${port}`);
})