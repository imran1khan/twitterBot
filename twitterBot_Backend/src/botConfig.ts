import {config} from "dotenv"
import  { TwitterApi} from "twitter-api-v2";
config();

const client = new TwitterApi({
    appKey: process.env.API_KEY || "",
    appSecret: process.env.API_SECRET || "",
    accessSecret: process.env.ACCESS_SECRET || "",
    accessToken: process.env.ACCESS_TOKEN || "",
});
const client2 = new TwitterApi(process.env.ACCESS_TOKEN || "");
const client3 = new TwitterApi(process.env.BEARER_TOKEN || "");
const twitterClient = client.readWrite;
const twitterBearer = client3.readOnly;

export { twitterClient, twitterBearer, client3,client,client2 };