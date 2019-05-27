const wishlist = [
    // {
    //     name: 'Air Jordan 1 x Off-white ',
    //     size: 11,
    //     image: "https://pmcfootwearnews.files.wordpress.com/2018/02/off-white-air-jordan-1-white-2.jpg?w=700&h=437&crop=1"
    // }

]

const getWishlist = (req, res) => {
    res.json(wishlist)
}

const deleteWish = (req, res) => {
    const index = wishlist.findIndex(wish=> wish.name === req.params.name)
    wishlist.splice(index, 1)
    res.json(wishlist)
}

const addWish = (req, res) => {
    wishlist.push(req.body)
    res.json(wishlist)
}

module.exports = {
    getWishlist,
    deleteWish,
    addWish
}