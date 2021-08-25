import db from '../../db/connections.js'


export const list = async(req, res, next) => {
    try {
        const authors = await db.query("select * from authors")
        res.send(authors.rows)
    } catch (error) {
        res.status(500).send(error)
    }
}