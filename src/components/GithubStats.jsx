import { useState, useEffect } from "react";
import { Octokit } from "@octokit/rest";
import ErrorPopup from "../components/ErrorPopup";
import {
  handleError,
  clearErrors,
  getErrorsFromLocalStorage
} from "../utils/ErrorUtils";

const githubToken = import.meta.env.REACT_APP_GITHUB_TOKEN;
const octokit = new Octokit({
  auth: githubToken
});

const GithubStats = () => {
  const username = "AkiVonAkira";
  const [totalLinesOfCode, setTotalLinesOfCode] = useState(0);
  const [rateLimit, setRateLimit] = useState(null);
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    setErrors(getErrorsFromLocalStorage());
  }, []);

  const handleCloseError = () => {
    setErrors([]);
    clearErrors();
  };

  useEffect(() => {
    const fetchRateLimit = async () => {
      try {
        const response = await octokit.request("GET /rate_limit", {
          headers: {
            "X-GitHub-Api-Version": "2022-11-28"
          }
        });

        const rateLimitData = response.data;
        setRateLimit(rateLimitData);
      } catch (error) {
        handleError("Error fetching rate limit.", error);
      }
    };

    fetchRateLimit();
  }, []);

  const fetchUserRepositories = async (username) => {
    try {
      if (rateLimit && rateLimit.resources.core.remaining <= 0) {
        console.warn("Rate limit exceeded. Please wait and try again later.");
        return;
      }

      const response = await octokit.request("GET /users/{username}/repos", {
        username: username,
        headers: {
          "X-GitHub-Api-Version": "2022-11-28"
        }
      });

      const repositories = response.data;
      let totalLines = 0;

      for (const repo of repositories) {
        if (rateLimit && rateLimit.resources.core.remaining <= 0) {
          console.warn("Rate limit exceeded. Waiting for rate limit reset...");
          await delay(rateLimit.resources.core.reset * 1000 - Date.now());
        }

        const repoStats = await fetchRepositoryStats(username, repo.name);
        totalLines += repoStats.lines;

        await delay(6000);
      }

      setTotalLinesOfCode(totalLines);
    } catch (error) {
      handleError("Error fetching repositories.", error);
    }
  };

  const fetchRepositoryStats = async (username, repoName) => {
    try {
      const response = await octokit.request("GET /repos/{owner}/{repo}", {
        owner: username,
        repo: repoName,
        headers: {
          "X-GitHub-Api-Version": "2022-11-28"
        }
      });

      const contributorsStats = response.data;
      let totalLinesOfCode = 0;

      contributorsStats.forEach((contributor) => {
        if (contributor.author.login === username) {
          contributor.weeks.forEach((week) => {
            totalLinesOfCode += week.a - week.d;
          });
        }
      });

      console.log(`Total Lines of Code for ${repoName}:`, totalLinesOfCode);
      return { lines: totalLinesOfCode };
    } catch (error) {
      if (
        error.status === 403 &&
        error.headers &&
        error.headers["x-ratelimit-remaining"] === "0"
      ) {
        return "GitHub Rate Limit";
      } else {
        handleError(`Error fetching stats for ${repoName}:`, error);
        return { lines: 0 };
      }
    }
  };

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  useEffect(() => {
    fetchUserRepositories(username);
  }, [rateLimit]);

  {
    errors.length > 0 && (
      <ErrorPopup
        messages={errors.map((error) => error.message)}
        onClose={handleCloseError}
        length={errors.length}
      />
    );
  }
};

export default GithubStats;
