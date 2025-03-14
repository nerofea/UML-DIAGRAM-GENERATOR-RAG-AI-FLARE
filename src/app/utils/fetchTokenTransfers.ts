import axios from "axios";

const COVALENT_API_KEY = process.env.COVALENT_API_KEY;

/**
 * Fetches live token transfers on Ethereum.
 * @returns {Promise<any[]>} - List of token transfers.
 */
export async function fetchTokenTransfers(): Promise<any[]> {
  try {
    const response = await axios.get(`https://api.covalenthq.com/v1/eth-mainnet/tokens/`, {
      params: { key: COVALENT_API_KEY },
    });

    return response.data.data.items;
  } catch (error) {
    console.error("Error fetching token transfers:", error);
    return [];
  }
}
