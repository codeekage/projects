//create env varibales 
module.exports = {
    env: {
        PORT: process.env.PORT || 5000,
        db: process.env.MONGODB_URI || "mongodb://localhost:27017/vlogapp"
    }

}