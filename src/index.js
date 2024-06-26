const express = require("express")
const morgan = require("morgan")
const pool = require("./db")
require("./db")
const app = express()
app.use(morgan("dev"))

app.get('/',(req,res)=>res.json({message:"Ruta inicial",alumno:"Mondragón Manchay Duberly Ivan"}))
app.get('/clientes',async(req,res)=>{
    const response = await pool.query("SELECT 1 + 1 AS result;")
    console.log(response)
    res.json([
        {id:1,name:"Joe"},
        {id:2,name:"Juan"},
        {id:3,name:"María"},
    ])
})
app.get('/productos',(req,res)=>res.json([
    {id:1,name:"Pizza"},
    {id:2,name:"Gaseosa"},
    {id:3,name:"Hamburguesa"},
]))
app.listen(5000,()=>console.log("Server running"))
