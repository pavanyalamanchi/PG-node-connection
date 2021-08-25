import fs from 'fs-extra'
import { join } from 'path'

import db from '../db/connections.js'

const sqlFilePath = join(process.cwd(), 'src/sql/create-tables.sql')

const createDefaultTables = async() => {
    try {
        const sqlCommandBuffer = await fs.readFile(sqlFilePath)
        const sqlCommands = sqlCommandBuffer.toString()
        await db.query(sqlCommands)
        console.log('default tables created')
    } catch (error) {
        console.log(error)
    }
}

export default createDefaultTables