import axios from "axios";

const GITHUB_API_KEY = process.env.GITHUB_API_KEY;

/**
 * Fetches details of a GitHub repository.
 * @param {string} repo - The GitHub repository (e.g., "microsoft/typescript").
 * @returns {Promise<any>} - Repository details.
 */
export async function fetchGitHubRepo(repo: string): Promise<any> {
  try {
    const response = await axios.get(`https://api.github.com/repos/${repo}`, {
      headers: { Authorization: `Bearer ${GITHUB_API_KEY}` },
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching GitHub repo:", error);
    return null;
  }
}
