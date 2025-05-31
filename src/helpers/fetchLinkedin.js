import { checkCache, setCache } from '../utils/cacheUtils';

const linkedInCacheKey = process.env.REACT_APP_LINKEDIN_CACHE_KEY;
const linkedInCacheExpirationKey =
  process.env.REACT_APP_LINKEDIN_CACHE_EXPIRATION_KEY;
const linkedInCacheDuration = parseInt(
  process.env.REACT_APP_LINKEDIN_CACHE_DURATION,
  10,
); // Convert to number

const linkedInUrl = process.env.REACT_APP_FRESH_LINKEDIN_PROFILE_DATA_URL;
const linkedInApiKey =
  process.env.REACT_APP_FRESH_LINKEDIN_PROFILE_DATA_API_KEY;

export const fetchLinkedInProfile = async () => {
  try {
    // have we got a cache for linkedin data? if so, return it
    const cacheData = checkCache(linkedInCacheKey, linkedInCacheExpirationKey);
    if (cacheData) {
      return cacheData;
    }

    // if not, fetch from Linkedin API
    const requestOptions = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': linkedInApiKey,
        'x-rapidapi-host': 'fresh-linkedin-profile-data.p.rapidapi.com',
      },
    };

    const response = await fetch(linkedInUrl, requestOptions);
    if (!response.ok) {
      throw new Error(
        `LinkedIn API error: ${response.status} ${response.statusText}`,
      );
    }

    const data = await response.json();

    // Store data in cache
    setCache(
      data,
      linkedInCacheKey,
      linkedInCacheExpirationKey,
      linkedInCacheDuration,
    );

    return data;
  } catch (error) {
    console.error('Error fetching LinkedIn profile:', error);
  }
};
