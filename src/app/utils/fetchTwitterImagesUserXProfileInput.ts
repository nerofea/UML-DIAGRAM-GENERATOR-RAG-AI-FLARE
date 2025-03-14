import axios from "axios";
import * as dotenv from "dotenv";

dotenv.config();

const BEARER_TOKEN = process.env.TWITTER_BEARER_TOKEN;

/**
 * Extracts the username from a given Twitter/X profile link.
 * @param profileLink - The full profile link (e.g., "https://x.com/FlareNetworks").
 * @returns The username (e.g., "FlareNetworks").
 */
function extractUsername(profileLink: string): string | null {
  const match = profileLink.match(/(?:https?:\/\/)?(?:www\.)?x\.com\/([^/?]+)/);
  return match ? match[1] : null;
}

/**
 * Fetches images from the given Twitter/X profile.
 * @param profileLink - The full Twitter/X profile link.
 * @param maxResults - Maximum number of tweets to check.
 * @returns Array of image URLs.
 */
export async function fetchTwitterImagesUserXProfileInput(profileLink: string, maxResults = 5) {
  const username = extractUsername(profileLink);
  if (!username) {
    console.error("Invalid Twitter/X profile link.");
    return [];
  }

  try {
    const url = `https://api.twitter.com/2/tweets/search/recent?query=from:${username}&max_results=${maxResults}&tweet.fields=created_at,public_metrics,entities&expansions=attachments.media_keys&media.fields=url`;

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
