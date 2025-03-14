import axios from "axios";

/**
 * Fetches dependency information from an open-source package manager.
 * @param {string} packageName - The package to track (e.g., "react").
 * @returns {Promise<any>} - Package dependency details.
 */
export async function fetchDependencies(packageName: string): Promise<any> {
  try {
    const response = await axios.get(`https://api.npmjs.org/dependency/${packageName}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching dependencies:", error);
    return [];
  }
}
