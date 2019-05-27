const express = require('express')
const wishlistController = require('./controllers/wishlistController')
const collectionController = require('./controllers/collectionController')
const app = express()

app.use(express.json())

app.get('/api/wishlist', wishlistController.getWishlist);
app.delete('/api/wishlist/:name', wishlistController.deleteWish)
app.post('/api/wishlist', wishlistController.addWish)

app.get('/api/collection', collectionController.getCollection);
app.delete('/api/collection/:name', collectionController.deleteCollect);
app.post('/api/collection', collectionController.addCollect)

const port = 5050
app.listen(port, () => {
    console.log(`Server port listening on ${port}`)
})