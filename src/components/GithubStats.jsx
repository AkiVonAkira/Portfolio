import { useState, useEffect } from "react";
import { Octokit } from "@octokit/rest";

const githubToken = import.meta.env.REACT_APP_GITHUB_TOKEN;
const octokit = new Octokit({
  auth: githubToken
});

const GithubStats = () => {
  const username = "AkiVonAkira";
  const [totalLinesOfCode, setTotalLinesOfCode] = useState(0);

  useEffect(() => {
    const fetchUserRepositories = async (username) => {
      try {
        const response = await octokit.repos.listForUser({
          username: username,
          headers: {
            "X-GitHub-Api-Version": "2022-11-28"
          }
        });

        const repositories = response.data;
        let totalLines = 0;

        for (const repo of repositories) {
          const repoStats = await fetchRepositoryStats(username, repo.name);
          totalLines += repoStats.lines;
        }

        setTotalLinesOfCode(totalLines);
      } catch (error) {
        console.error("Error fetching repositories:", error);
      }
    };

    fetchUserRepositories(username);
  });

  const fetchRepositoryStats = async (username, repoName) => {
    try {
      const response = await octokit.repos.getContributorsStats({
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
      console.error(`Error fetching stats for ${repoName}:`, error);
      return { lines: 0 };
    }
  };

  return totalLinesOfCode;
};

export default GithubStats;
