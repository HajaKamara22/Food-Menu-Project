let cors = require('cors')

let express = require('express')
let bodyParser = require("body-parser")
let app = express()


const corsOptions ={
    origin: '*', 
    credentials: true,
    optionSuccessStatus:200,
}

app.use(cors(corsOptions))
app.use(bodyParser.json())

const menu = [
    {
    name: "Burger",
    description: "Cheese burger",
    price: "5.00",
    image:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=3399&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&quot;"
    },
    {
    name: "Taco",
    description: "Steak Cilantro and onion",
    price: "2.00",
    image:"https://images.unsplash.com/photo-1512838243191-e81e8f66f1fd?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&quot;"
    },
    {
    name: "Steak",
    description: "A5 Wagyu Fillet",
    price: "100.00",
    image:"https://images.unsplash.com/photo-1504973960431-1c467e159aa4?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&quot;"
    },
    {
    name: "Pasta",
    description: "Pasta mmmmm yummy yummy",
    price: "10.00",
    image:"https://images.unsplash.com/photo-1516685018646-549198525c1b?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&quot;"
    }
    ]



    app.get('/menu', function(req, res){
        res.json(menu)
    })



    app.post('/additem', function(req,res){
        const newItem = req.body;
        menu.push(newItem) //adding new item to the menu
        res.send(req.body) //sending new item 
    })
    
    




app.listen(3000)