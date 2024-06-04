const crypto=require('crypto');
const {connect}=require('getstream');
const StreamChat = require('stream-chat').StreamChat;
const bcrypt=require('bcrypt');
require('dotenv').config();
const API_KEY=process.env.API_KEY;
const APP_ID=process.env.APP_ID;
const APP_SECRET=process.env.APP_SECRET;
const signup=async (req,res)=>{
    try {
        const {FullName,Username,MobilNum,AvatarUrl,Password}=req.body;
        const userID=crypto.randomBytes(16).toString('hex');
        const serverClient=connect(API_KEY,APP_SECRET,APP_ID);
        const hashedPassword=await bcrypt.hash(Password,10);
        const token=serverClient.createUserToken(userID);
        res.json({token,FullName,Username,userID,hashedPassword});

    } catch (error) {
        res.json({message:error})
    }
}
const login=async(req,res)=>{
    try {
        const {Username,Password}=req.body;
const serverClient=connect(API_KEY,APP_SECRET,APP_ID);
const client=StreamChat.getInstance(API_KEY,APP_SECRET);

const {users}=await client.queryUsers({name:Username})
if(!users.length) res.status(400).json({message:'User Not Found'});
 
const sucesss=await bcrypt.compare(Password,users[0].hashedPassword);
const token=serverClient.createUserToken(users[0].id);

if (sucesss) {
    res.status(200).json({token,FullName:users[0].FullName,Username,userID : users[0].id})
}
else{
    res.status(400).json({message:'Invalid Password'})
}
    } catch (error) {
        res.status(500).json({message:error})
    }
}

exports.login= login;
exports.signup=signup;