const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const routes = require('./routes/taskRoutes')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 8000

app.use(express.json())
app.use(cors())
app.use(routes)

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log('[*] Connected to MongoDB')
    })
    .catch((error) => {
        console.log('[-] Error encountered!\n', error)
    })

app.listen(PORT, () => {
    console.log('[*] Server started @ ' + PORT)
})
