const express = require('express')
const cors = require('cors')

class Server {

    constructor(){
        this.app= express()
        this.port = process.env.PORT
        this.userPath = '/api/users'

        //Middlewares
        this.middlewares()

        //Rutas de la aplicacion
        this.routes()
    }

    //CONFIGURACION DE LOS MIDDLEWARES
    middlewares(){

        //CORS
        this.app.use( cors() )

        //LEctura y parseo del body
        this.app.use( express.json())

        //Directorio publico
        this.app.use( express.static('public'))
    }

    //METODOS PARA CONFIGURAR LAS RUTAS 
    routes(){
        this.app.use(this.userPath, require('../routes/user'))

    }

    //METODO PARA LEVANTAR EL SERVIDOR
    listen(){
        this.app.listen(this.port, () =>{
            console.log('Server on port', this.port);
        })
    }
}

module.exports = Server