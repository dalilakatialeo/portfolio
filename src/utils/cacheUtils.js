const checkCache = (cacheKey, cacheExp) => {
  const cachedData = localStorage.getItem(cacheKey);
  const cacheExpiration = localStorage.getItem(cacheExp);

  if (
    cachedData &&
    cacheExpiration &&
    Date.now() < parseInt(cacheExpiration, 10)
  ) {
    // we have valid cache, return it
    return JSON.parse(cachedData);
  }
  // no valid cache, return null
  return null;
};

const setCache = (data, cacheKey, cacheExp, cacheDuration) => {
  const cacheExpiration = Date.now() + cacheDuration;

  // store cache in localstorage
  localStorage.setItem(cacheKey, JSON.stringify(data));
  localStorage.setItem(cacheExp, cacheExpiration.toString());
};
export { checkCache, setCache };
