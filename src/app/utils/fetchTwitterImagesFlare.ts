import axios from "axios";
import * as dotenv from "dotenv";

dotenv.config();

const BEARER_TOKEN = process.env.TWITTER_BEARER_TOKEN;

export async function fetchFlareImages(maxResults = 5) {
  try {
    const url = `https://api.twitter.com/2/tweets/search/recent?query=from:FlareNetworks&max_results=${maxResults}&tweet.fields=created_at,public_metrics,entities&expansions=attachments.media_keys&media.fields=url`;

    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${BEARER_TOKEN}`,
      },
    });

    const media = response.data.includes?.media || [];

    return media
      .filter((m: any) => m.type === "photo") // Ensure we only get images (not videos or GIFs)
      .map((m: any) => m.url); // Extract only the image URLs
  } catch (error) {
    console.error("Twitter API Error:", error.response?.data || error);
    return [];
  }
}
