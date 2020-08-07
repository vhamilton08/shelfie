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
       const {name} = req.params
       const index = inventory.findIndex(inventory => inventory.productName === productName)
       db.deleteProduct.splice(index, 1)
       res.status(200).send(products)
   }
}