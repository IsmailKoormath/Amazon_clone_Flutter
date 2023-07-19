// const express = require("express");
// const mongoose = require("mongoose");
import express from 'express';
import * as  mongoose from 'mongoose';


class App {
  public app: express.Application;
  public port: String | number;
  public url?: String ;

  constructor() {
    this.app = express();
    this.port = process.env.PORT || 3000;
    this.url = process.env.MONGODB_URL;

    this.connectToDatabase();
    this.initializeMiddlewares();
  }
  private connectToDatabase = () => {
    try {
      const dbConnection = mongoose.connect(`${this.url}`);
      console.log("Database Connected Successfully");
    } catch (error) {
      console.log("Database error");
    }
  };

  private initializeMiddlewares() {
    this.app.use(express.json());
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log("====================================");
      console.log(`App listening on the port${this.port}`);
      console.log("====================================");
    });
  }
}
