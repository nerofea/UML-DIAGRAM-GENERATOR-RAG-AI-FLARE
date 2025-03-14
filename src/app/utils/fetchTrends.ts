import { NextApiRequest, NextApiResponse } from "next";
import googleTrends from "google-trends-api";

// I am not manageing here due to CORS issue. TO DO: FETCH GOOGLE TRENDS


/**
 * API handler to fetch Google Trends.
 */
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const results = await googleTrends.dailyTrends({ geo: "US" });

    if (typeof results === "string") {
      const parsedResults = JSON.parse(results);
      const trends = parsedResults.default.trendingSearchesDays[0].trendingSearches.map(
        (trend: any) => trend.title
      );

      return res.status(200).json(trends);
    } else {
      return res.status(200).json(results);
    }
  } catch (error) {
    console.error("Google Trends API error:", error);
    return res.status(500).json({ error: "Failed to fetch Google Trends" });
  }
}
