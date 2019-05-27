const collection = [
    // {
    //     // name: 'Air Jordan 1 x Off-white EU',
    //     // size: 11,
    //     // image: "https://pmcfootwearnews.files.wordpress.com/2018/02/off-white-air-jordan-1-white-2.jpg?w=700&h=437&crop=1"
    // }

]

const getCollection = (req, res) => {
    res.json(collection)
}

const deleteCollect = (req, res) => {
    const index = collection.findIndex(collect=> collect.name === req.params.name)
    collection.splice(index, 1)
    res.json(collection)
}

const addCollect = (req, res) => {
    collection.push(req.body)
    res.json(collection)
}

module.exports = {
    getCollection,
    deleteCollect,
    addCollect
}