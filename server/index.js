"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// const express = require("express");
// const mongoose = require("mongoose");
var express_1 = require("express");
var mongoose = require("mongoose");
var App = /** @class */ (function () {
    function App() {
        var _this = this;
        this.connectToDatabase = function () {
            try {
                var dbConnection = mongoose.connect("".concat(_this.url));
                console.log("Database Connected Successfully");
            }
            catch (error) {
                console.log("Database error");
            }
        };
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || 3000;
        this.url = process.env.MONGODB_URL;
        this.connectToDatabase();
        this.initializeMiddlewares();
    }
    App.prototype.initializeMiddlewares = function () {
        this.app.use(express_1.default.json());
    };
    App.prototype.listen = function () {
        var _this = this;
        this.app.listen(this.port, function () {
            console.log("====================================");
            console.log("App listening on the port".concat(_this.port));
            console.log("====================================");
        });
    };
    return App;
}());
