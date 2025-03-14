import axios from "axios";

/**
 * Fetches real-time Flare FTSO data.
 * @returns {Promise<any>} - Flare Network oracle price feeds.
 */
export async function fetchFTSO(): Promise<any> {
  try {
    const response = await axios.get("https://api.flare.xyz/ftso");
    return response.data;
  } catch (error) {
    console.error("Error fetching FTSO data:", error);
    return [];
  }
}
