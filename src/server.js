import express from 'express'

import cors from 'cors'

import mainRoute from './services/index.js'

import createDefaultTables from './scripts/create-tables.js'

const app = express();

app.use(express.json())

app.use(cors())

const { PORT } = process.env

app.use('/', mainRoute)

app.listen(PORT, async() => {
    await createDefaultTables();
    console.log("server is running")
})

app.on("error", () => console.log())