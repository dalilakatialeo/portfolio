const checkCache = (cacheKey, cacheExp) => {
  console.log('Checking cache for:', cacheKey);
  const cachedData = localStorage.getItem(cacheKey);
  const cacheExpiration = localStorage.getItem(cacheExp);

  if (
    cachedData &&
    cacheExpiration &&
    Date.now() < parseInt(cacheExpiration, 10)
  ) {
    // we have valid cache, return it
    console.log('Cache hit for:', cacheKey);
    return JSON.parse(cachedData);
  }
  // no valid cache, return null
  console.log('Cache miss for:', cacheKey);
  return null;
};

const setCache = (data, cacheKey, cacheExp, cacheDuration) => {
  const cacheExpiration = Date.now() + cacheDuration;

  // store cache in localstorage
  localStorage.setItem(cacheKey, JSON.stringify(data));
  localStorage.setItem(cacheExp, cacheExpiration.toString());
};
export { checkCache, setCache };
