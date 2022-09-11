const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 8000

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
