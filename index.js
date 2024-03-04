const express = require ('express');
const app = express();
const cors = require('cors');
app.use(express.json());
app.use(cors());
const port = 5000;
app.listen(5000, ()=> {
   console.log("Server Running on 5000")
});

const data = [
    {
        name: "bilal"
        
    }
]