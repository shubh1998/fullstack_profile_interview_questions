USE CASE BASED QUESTIONS
===============================================================

- Suppose if a user tries to login 100 times from same IP and we detect some suspicious into that how can we prevent login API from that static IP?
  
- If a Hacker is trying to hack your login api with dynamic IP now, then how would you prevent your api now?
  
- If a user is trying to bet in a game from 2 different systems with same id there will come a problem in wallet balance as now we have concurrent operations for same user and at the same time from both systems user is placing bet then how we maintain that concurrency and keep our balance consistent and integrate.

- suppose we have 100s of userIds from 1 to 100 and I need to call an api by passing every userId in query param but the catch point is here the api is able to server the 10 request per minute. SO how can we do that write js script for that
```
const userIds = Array.from({ length: 100 }, (_, i) => i + 1); // Generating an array of userIds from 1 to 100
const apiUrl = 'https://example.com/api'; // Replace with your actual API endpoint

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function callApi(userId) {
  try {
    const response = await fetch(`${apiUrl}?userId=${userId}`);
    const data = await response.json();
    console.log(`Response for userId ${userId}:`, data);
  } catch `(error) {
    console.error(`Error for userId ${userId}:`, error);
  }
}

async function executeApiCalls() {
  for (const userId of userIds) {
    await callApi(userId);
    await delay(6000); // Introducing a delay of 6 seconds to stay within the 10 requests per minute limit
  }
}

executeApiCalls();
```

- Did you work on B2B and B2C Solutions?

- Suppose I want a report of multiple games whose ids are [1,2,3,4]. 
  In the report I want totalBet, totalWinnings, averageWinPercentage, maxBet and minBet
  Write a sql query how can you find those things from the table.
  Please consider the relationship between games and bets tables. As one game can have 
  multiple Bets.

- Suppose our betting system provides a support for multi currency bet. And we are storing data in that form.
  What the problem in this case is that, If suppose client wants a all games report in single currency
  How can we achieve that as multiple currencies have diff exchange rates. 
  What will be the best solution for this.

- How will you block the api calls for the single IP if there will multiple hits happened by single IP?

- Do you have experience with socket programming? If Yes, How does you implemented socket in your project? What approach you follow? How can you achieve scalability in applications for socket?

- Do you know about socket managers, namespaces and rooms? And have experience in building a chat application?

- Do you have any kind of previous experience in building games?