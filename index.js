const express= require('express');
const cors=require('cors');
const router=require('./routes/auth.js')
const app= express();
const PORT=process.env.PORT || 5000;

require('dotenv').config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const Account_sid=process.env.TWILIO_ACCOUNT_SID;
const Auth_token=process.env.WILIO_AUTH_TOKEN;
const MESSAGESERVICE=process.env.MESSAGESERVICE;
const client = require('twilio')(Account_sid, Auth_token);

app.get('/',(req,res) =>{
    res.send('Hello world')
});
app.post('/',(req,res)=>{
    const {message,user:sender,type,memebers}=req.body;
    if (type === 'message.new') {
        memebers
        .filter((memeber)=>memeber.user_id != sender.id)
        .forEach((user)=> {
            if (!user.online) {
                client.messages.create({
                    body:`You have a new Mesage from ${message.user.FullName} - ${message.text}`,
                    messagingServiceSid:MESSAGESERVICE,
                    to:user.MobilNum
                }).then(()=>console.log('Mesage Sent')).catch((err)=>console.log(err));
            }
        });
       return res.status(200).send('Message Sent')
    }
    return res.status(200).send('Not a new Message Request')
})

app.use('/auth',router)

app.listen(PORT,()=>console.log(`Server is running on port ${PORT}`));