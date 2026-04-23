const express = require("express");
const redis = require("redis");

const app = express();

// Redis client (docker network ismi: redis)
const client = redis.createClient({
  url: "redis://redis:6379"
});

client.connect();

app.get("/", async (req, res) => {
  const cached = await client.get("home");

  if (cached) {
    return res.send("CACHE HIT ⚡ " + cached);
  }

  const response = "Hello from Node + Redis 🚀";
  await client.set("home", response, { EX: 30 }); // 30 sec cache

  res.send("CACHE MISS ❌ " + response);
});

app.listen(3000, "0.0.0.0", () => {
  console.log("App running on port 3000");
});
