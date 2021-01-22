const express = require('express')
const app = express()
const port = process.env.PORT || 3000; 
app.get('/',  (req, res) =>{
  let  primertrabajo=[
        {
            nombre:'thor',
            apellido:'Gonsales',
            dni:'78456233'
        },
        {
            nombre:'Batman',
            apellido:'Perez',
            dni:'49265876'
        }
    ]

 res.send(primertrabajo)
  res.end()
})
 
app.listen(port ,()=>{
    console.log(`Escuchando el puerto:${port}`);
})