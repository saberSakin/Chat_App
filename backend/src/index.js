import express from "express" 

const app = express(); // 2. Create an Express application

app.listen(5001, () => { // 3. Start the server on port 5001
  console.log("server is running on port 5001"); // 4. Log a message to the console
});