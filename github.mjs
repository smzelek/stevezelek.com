import fetch from 'node-fetch';
import { writeFileSync } from 'fs';

// If building locally, this file will fail without a github token defined.

const query = `query { 
user(login:"smzelek") { 
  contributionsCollection {
    contributionYears
    contributionCalendar {
      totalContributions
      colors
      months {
        name
        totalWeeks
      }
      weeks {
        contributionDays {
          contributionLevel
        }
      }
    }
  }
}
}`;

const cacheGithubData = async () => {
  console.log("Loading GitHub contribution data to cache it")
  const data = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      Authorization: `token ${process.env.SAFE_TOKEN}`,
    },
    body: JSON.stringify({
      query,
      variables: {},
    })
  });

  const json = await data.json();

  console.log("Loaded data")
  writeFileSync('./assets/github.json', JSON.stringify(json));
  console.log("Wrote data to ./assets/github.json")
}

await cacheGithubData();
