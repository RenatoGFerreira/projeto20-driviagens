import express from "express";
import dotenv from "dotenv";
import cors from "cors"
import router from "./routes/index.routes.js"


dotenv.config()
const app = express()
app.use(express.json())
app.use(cors)
app.use(router)


app.get("/test", (req, res) => {
    res.send("Working!!!")
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))