"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const twitter_config = {
    consumer_key: process.env.API_KEY,
    consumer_secret: "",
    access_token: "",
    access_token_secret: "",
};
console.log(twitter_config.consumer_key);
//# sourceMappingURL=app.js.map