import { checkCache, setCache } from '../utils/cacheUtils';

const gitHubCacheKey = process.env.REACT_APP_GITHUB_CACHE_KEY;
const gitHubCacheExpirationKey =
  process.env.REACT_APP_GITHUB_CACHE_EXPIRATION_KEY;
const gitHubCacheDuration = parseInt(
  process.env.REACT_APP_GITHUB_CACHE_DURATION,
  10,
); // Convert to number

const gitHubUrl = process.env.REACT_APP_GITHUB_API_URL;

export const fetchGitHubRepos = async () => {
  try {
    // have we got a cache for githuib data? if so, use that
    const cacheData = checkCache(gitHubCacheKey, gitHubCacheExpirationKey);
    if (cacheData) {
      return cacheData;
    }
    // otherwise, call the GitHub api
    const requestOptions = {
      method: 'GET',
      headers: {
        Accept: 'application/vnd.github+json',
      },
    };

    const response = await fetch(gitHubUrl, requestOptions);
    if (!response.ok) {
      throw new Error(
        `GitHub API error: ${response.status} ${response.statusText}`,
      );
    }

    const repos = await response.json();

    // filter out the repository that matches the username, that is just a readme!
    const username = process.env.REACT_APP_GITHUB_USERNAME;
    const filteredRepos = repos.filter((repo) => repo.name !== username);

    // for each repo, we need to fetch the languages used
    const reposWithLanguages = await fetchLanguagesForRepos(
      filteredRepos,
      requestOptions,
    );

    // Store data in cache
    setCache(
      reposWithLanguages,
      gitHubCacheKey,
      gitHubCacheExpirationKey,
      gitHubCacheDuration,
    );

    return reposWithLanguages;
  } catch (error) {
    console.error('Error fetching GitHub repositories:', error);
    throw error; // Re-throw the error for the calling code to handle
  }
};

const fetchLanguagesForRepos = async (repos, requestOptions) => {
  try {
    const reposWithLanguages = await Promise.all(
      repos.map(async (repo) => {
        try {
          const languageResponse = await fetch(
            repo.languages_url,
            requestOptions,
          );
          if (languageResponse.ok) {
            const languages = await languageResponse.json();
            return { ...repo, languages: Object.keys(languages).join(', ') };
          } else {
            console.error(`Failed to fetch languages for ${repo.name}`);
            return { ...repo, languages: 'Unknown' };
          }
        } catch (error) {
          console.error(`Error fetching languages for ${repo.name}:`, error);
          return { ...repo, languages: 'Unknown' };
        }
      }),
    );

    return reposWithLanguages;
  } catch (error) {
    console.error('Error fetching languages for repositories:', error);
    throw error; // Re-throw the error for the calling code to handle
  }
};
