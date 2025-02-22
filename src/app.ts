import Express  from "express";
import cors from 'cors'
import bodyParser from "body-parser";
import userRoutes from "./routes/user.routes"
import router from "./routes/user.routes";

const app = Express()
app.use(cors())
app.use(bodyParser.json())
app.use('/users',router)

export default app