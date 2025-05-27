export const fetchLinkedInProfile = async () => {
  // have we got a cache? if so, return it
  const cacheData = checkCache();
  if (cacheData) {
    return cacheData;
  }

  // if not, fetch the data from the API
  const url = process.env.REACT_APP_FRESH_LINKEDIN_PROFILE_DATA_URL;
  const apiKey = process.env.REACT_APP_FRESH_LINKEDIN_PROFILE_DATA_API_KEY;

  const requestOptions = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': apiKey,
      'x-rapidapi-host': 'fresh-linkedin-profile-data.p.rapidapi.com',
    },
  };

  const response = await fetch(url, requestOptions);

  const data = await response.json();

  // store to cache
  setCache(data);
  return data;
};

const checkCache = () => {
  const cachedData = localStorage.getItem(process.env.REACT_APP_CACHE_KEY);
  const cacheExpiration = localStorage.getItem(
    process.env.REACT_APP_CACHE_EXPIRATION_KEY,
  );

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

const setCache = (data) => {
  const cacheDuration = parseInt(process.env.REACT_APP_CACHE_DURATION, 10); // Convert to number
  const cacheExpiration = Date.now() + cacheDuration;

  // store cache in localstorage
  localStorage.setItem(process.env.REACT_APP_CACHE_KEY, JSON.stringify(data));
  localStorage.setItem(
    process.env.REACT_APP_CACHE_EXPIRATION_KEY,
    cacheExpiration.toString(),
  );
};
