import axios from "axios";
import * as dotenv from "dotenv";

dotenv.config();

const BEARER_TOKEN = process.env.TWITTER_BEARER_TOKEN;

export async function fetchTrendingTweets(query: string, maxResults = 5) {
  try {
    const url = `https://api.twitter.com/2/tweets/search/recent?query=${query}&max_results=${maxResults}&tweet.fields=created_at,public_metrics,entities`;
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${BEARER_TOKEN}`,
      },
    });

    return response.data.data.map((tweet: any) => ({
      text: tweet.text,
      created_at: tweet.created_at,
      images: tweet.entities?.media?.map((m: any) => m.url) || [],
    }));
  } catch (error) {
    console.error("Twitter API Error:", error);
    return [];
  }
}
