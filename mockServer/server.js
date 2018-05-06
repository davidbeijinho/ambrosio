const http = require('http');

const PORT = 4000;
const REPONSE_TYPE = 1;
// 0 text
// 1 json

const DELAYED = true;
const DELAY_TIME = 10000;
const TEXT_RESPONSE = 'HELLO WORLD';
const JSON_RESPONSE = {
  name: 'New Tracker 001',
  count: 17,
  location: false,
  id: '5ab02b15e877a80f24eed61c',
};


const sendText = (req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/plain',
    'Access-Control-Allow-Origin': '*',
  });
  if (DELAYED) {
    setInterval(() => {
      res.end(TEXT_RESPONSE);
    }, DELAY_TIME);
  } else {
    res.end(TEXT_RESPONSE);
  }
};

const sendJson = (req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/json',
    'Access-Control-Allow-Origin': '*',
  });
  if (DELAYED) {
    setInterval(() => {
      res.end(JSON.stringify(JSON_RESPONSE));
    }, DELAY_TIME);
  } else {
    res.end(JSON.stringify(JSON_RESPONSE));
  }
};

const responses = [sendText, sendJson];
const server = http.createServer(responses[REPONSE_TYPE]);

server.listen(PORT);
