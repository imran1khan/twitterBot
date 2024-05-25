import { client, client2, twitterBearer, twitterClient } from "./botConfig";


const tweet = async () => {
  try {
    //create a tweet
    // await twitterClient.v2.tweet("Hello from back");

    // upload image and tweet
    // First, post all your images to Twitter
    // const mediaIds = await Promise.all([
    //   client.v1.uploadMedia('./utils/bOvf94dPRxWu0u3QsPjF_tree.jpg'),
    //   client.v1.uploadMedia('./utils/flowers-276014_640.jpg'),
    // ]);

    // // mediaIds is a string[], can be given to .tweet
    // const res=await client.v2.tweet({
    //   text: 'test 2 for the twitter',
    //   media: { media_ids: mediaIds }
    // });

    // reply for a tweet
    // const res = await client.v2.reply(
    //   'reply to previously created tweet.',
    //   "1787754478990499975",
    // );

    // Post multiple tweets at one time
    const mediaId = await client.v1.uploadMedia('./utils/flowers-276014_640.jpg');
    await client.v2.tweetThread([
      'Hello, lets talk about Twitter!',
      { text: 'Twitter is a fantastic social network. Look at this:', media: { media_ids: [mediaId] } },
      'This thread is automatically made with twitter-api-v2 :D',
    ]);
  } catch (e) {
    console.log(e)
  }
}

tweet();