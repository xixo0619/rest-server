const { response } = require('express')

const getUser = (req, res = response) => {

    const { q, nombre = 'No name', apikey, page = 1 ,limit } = req.query
    res.json({
        msg: 'get API - Controller',
        q,
        nombre,
        apikey,
        page,
        limit
    })
}

const userPut = (req, res) => {

    const { id } = req.params
    res.json({
        msg: 'put API - Controller',
        id
    })
} 

const userPost = (req, res) => {
    const {nombre, edad} = req.body
    res.json({
        msg: 'post API - Controller',
        nombre,
        edad
    })
}

const userPatch = (req, res) => {
    res.json({
        msg: 'patch API - Controller'
    })
}

const userDelete = (req, res) => {
    res.json({
        msg: 'delete API - Controller'
    })
}

module.exports = {
    getUser,
    userDelete,
    userPatch,
    userPost,
    userPut
}