import nodemailer from 'nodemailer'
import dotenv from 'dotenv'

dotenv.config()

const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: 587,
    secure: false, // true for port 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

const mainOptions = {
    from: `"API TEST" <${process.env.EMAIL_USER}>`,
    to: "bracellos@gmail.com",
    subject: "Enviando email test",
    text: "Aqui vai o conteudo do email"
}

export async function enviaEmail() {
    
    const envio = await transporter.sendMail(mainOptions)
}

