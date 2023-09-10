import express from "express"
import cors from "cors"
import dotenv from "dotenv"
dotenv.config()
import router from "../src/routes/index.routes.js"


const app = express()
app.use(cors())
app.use(express.json())
app.use(router)


app.get("/test", (req, res) => {
    res.send("Its WORKING!!!")
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Running in port ${PORT}`))
