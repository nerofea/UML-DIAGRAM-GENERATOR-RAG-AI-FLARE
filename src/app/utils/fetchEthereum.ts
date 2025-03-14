import axios from "axios";

const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;
const ETHERSCAN_URL = "https://api.etherscan.io/api";

/**
 * Fetches recent Ethereum transactions.
 * @returns {Promise<any[]>} - Array of recent Ethereum transactions.
 */
export async function fetchEthereumTransactions(): Promise<any[]> {
  try {
    const response = await axios.get(ETHERSCAN_URL, {
      params: {
        module: "account",
        action: "txlist",
        address: "0x...", // Replace with specific address
        startblock: 0,
        endblock: 99999999,
        sort: "desc",
        apikey: ETHERSCAN_API_KEY,
      },
    });

    return response.data.result;
  } catch (error) {
    console.error("Error fetching Ethereum transactions:", error);
    return [];
  }
}
