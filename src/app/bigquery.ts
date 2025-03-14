import { BigQuery } from "@google-cloud/bigquery";
import * as dotenv from "dotenv";

dotenv.config(); // Load environment variables

// Initialize BigQuery client
const bigquery = new BigQuery();

// Function to query BigQuery
async function queryBigQuery(dataset: string, table: string, limit = 10) {
  const query = `
    SELECT *
    FROM \`bigquery-public-data.${dataset}.${table}\`
    LIMIT ${limit}
  `;

  try {
    const [rows] = await bigquery.query(query);
    console.log(`Results from ${dataset}.${table}:`);
    rows.forEach((row) => console.log(row));
  } catch (error) {
    console.error("Error running BigQuery:", error);
  }
}

// Query different datasets
queryBigQuery("github_repos", "sample_repos", 5); // Fetch GitHub repos
queryBigQuery("google_trends", "top_terms", 5); // Fetch Google Trends
queryBigQuery("ethereum_blockchain", "transactions", 5); // Fetch Ethereum transactions

// google trends
// bigquery-public-data.google_trends
// github repos
// bigquery-public-data.github_repos