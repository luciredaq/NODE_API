import Bull from "bull";
import {enviaEmail} from '../services/email.service'
import { log } from "console";

const emailQueue = new Bull("emailQueue",{
    redis: {host: "127.0.0.1", port: 6379}
})

emailQueue.process(async(job) => {
    console.log("enviando email");
    await enviaEmail()
    console.log("email enviado");
})