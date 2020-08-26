module.exports = {
getInventory:(req, res) => {
    const db = req.app.get('db')
    db.get_inventory().then(products =>{
        res.status(200).send(products)
    })
},
addProduct:(req, res) => {
    const db = req.app.get('db')
    const {name, price, imageUrl} = req.body
    db.create_product([name, price, imageUrl]).then(products => {
        res.status(200).send(products)
    })
},
   deleteProduct:(req, res) => {
       const db = req.app.get('db')
       const {id} = req.params
       db.delete_product(id)
       .then(() => {
           res.status(200).send(products)
        }).catch(err => console.log(err))
    },

    editProduct:(req, res) => {
        const db = req.app.get('db')
        const {id} = req.params
        const {name, price, imageUrl} = req.query
        db.edit_product(id, name, price, imageUrl)
        .then(() => {
            res.status(200).send(products)
        }).catch(err => console.log(err))
    }
}