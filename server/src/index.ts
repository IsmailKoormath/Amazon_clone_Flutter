import express from 'express';
import mongoose from 'mongoose';
import http from "http";
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import compressoin from 'compression';
import cors from 'cors'
import dbConnect from './config/dbConnection';
import authRouter from './routes/auth_route';

const app = express()

app.use(cors({
  credentials:true,
}))

app.use(compressoin());
app.use(cookieParser());
app.use(bodyParser.json());

const server = http.createServer(app);

dbConnect();
app.use('/',authRouter);

server.listen(8080, ()=>{
console.log('servet running on http://localhost:8080/');

});