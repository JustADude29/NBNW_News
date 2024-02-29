import express from "express";
import path from "path";
import axios from "axios";

const app = express(); // using express to handle routes
const port = 3000;

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.redirect("/headlines"); // no landing page as of yet, redirects to headlines page
});

// Api to fetch headlines from newapi.org, requires apikey
app.get("/headlinesApi", async (req, res) => {
  try {
    // console.log("api called");

    const apiResponse = await axios.get(
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=9a12356d0e264020b3d8f6f5f0c57aef", // fetching top headliens in India
    );

    const latestHeadlines = apiResponse.data.articles || [];

    res.send(latestHeadlines);
    // console.log("api called and articles sent");
  } catch (error) {
    console.error("Error fetching headlines:", error.message);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/headlines", async (req, res) => {
  res.sendFile(path.join(__dirname, "../client/headlines.html"));
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
