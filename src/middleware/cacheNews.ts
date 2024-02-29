import express from "express";
import cache from "memory-cache";

// uses cache if exists else adds response to cache with time limit 5min
const cacheMiddleware = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
) => {
  const key = req.originalUrl || req.url;
  const cachedBody = cache.get(key);

  if (cachedBody) {
    console.log("Using cache");
    res.send(cachedBody);
  } else {
    res.sendResponse = res.send;
    res.send = (body) => {
      // only adds to cacje if the response is not an error
      if (res.statusCode != 500) {
        cache.put(key, body, 5 * 60 * 1000);
      }

      res.sendResponse(body);
    };
    next();
  }
};

export default cacheMiddleware;
