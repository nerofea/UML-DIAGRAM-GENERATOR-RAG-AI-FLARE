async function fetchFeedValues(): Promise<void> {
  try {
    const response = await fetch("http://localhost:3101/feed-values/0", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        feeds: [{ category: 1, name: "BTC/USD" }],
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data: any = await response.json();
    console.log("Fetched Data:", data);
  } catch (error) {
    console.error("Error fetching feed values:", error);
  }
}

fetchFeedValues();
