const mongoose = require('mongoose')
const connectDB = async () => {
    try {
        // mongodb connection string
        await mongoose.set('strictQuery', false)
        const con = await mongoose.connect(process.env.MONGO_URI)
        console.log(`MongoDB connected: ${con.connection.host}`)
    } catch (err) {
        console.log(err)
        process.exit(1)
    }
}

module.exports = connectDB