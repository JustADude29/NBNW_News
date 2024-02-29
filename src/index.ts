import express from "express";
import path from "path";
import axios from "axios";
import dotenv from "dotenv";

import cacheMiddleware from "./middleware/cacheNews";

dotenv.config();
const app = express(); // using express to handle routes
const port = 3000;

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (_, res) => {
  res.redirect("/headlines"); // no landing page as of yet, redirects to headlines page
});

// Api to fetch headlines from newapi.org, requires apikey
app.get("/headlinesApi", cacheMiddleware, async (_, res) => {
  try {
    const apiKey = process.env.NEWS_API_KEY;
    const apiResponse = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`, // fetching top headliens in India
    );

    const latestHeadlines = apiResponse.data.articles || [];

    res.send(latestHeadlines);
  } catch (error) {
    console.error("Error fetching headlines:", error.message);
    res.status(500).send({ ApiError: "Internal Server Error" });
  }
});

app.get("/headlines", async (_, res) => {
  res.sendFile(path.join(__dirname, "../client/headlines.html"));
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
