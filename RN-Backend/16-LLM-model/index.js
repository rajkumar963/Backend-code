const express = require('express');
const app=express();
const main = require('./aichat');

app.use(express.json());

// In-memory chat history
const chatHistory = [];

app.post('/chat', async (req, res) => {
  try {
    const { id, message } = req.body;
    const response = await main(message);
    console.log(response);
    if(!chatHistory[id]){
        chatHistory[id] = [];
    }

    const history = chatHistory[id];
    const promptmessage=[...history,{
        role: "user", parts:[{text:message}]
    }]; 

    history.push({ role: "user", parts:[{text:message}] });
    history.push({ role: "assistant", parts:[{text:response}] });

    res.send(promptmessage);
    
  } catch (error) {
    res.status(500).send({ error: 'An error occurred' });
  }
});



app.listen(4000,()=>{
    console.log("Server is running on port 4000");
});

