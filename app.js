const express = require("express");
const app = express();
const path = require("path");
const port = 8619;

app.use(express.static(path.join(__dirname , "../Guess_The_NUmber")));


app.get("/GuessTheNumber" , (req , res) =>{
    res.sendFile(path.join(__dirname , "./index.html"));
})

app.listen(port , () => {
    console.log(`ye kaam kar rha he...is port no. se ${port}`);
})
