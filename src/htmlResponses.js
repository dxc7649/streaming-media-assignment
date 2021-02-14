const fs = require('fs'); // pull in the file system module

const index = fs.readFileSync(`${__dirname}/../client/client.html`);
const secondPage = fs.readFileSync(`${__dirname}/../client/client2.html`);
const thirdPage = fs.readFileSync(`${__dirname}/../client/client3.html`);

const getIndex = (request, response) => {
  response.writeHead(200, {
    'Content-Type': 'text/html',
  });
  response.write(index);
  response.end();
};

const getSecond = (request, response) => {
  response.writeHead(200, {
    'Content-Type': 'text/html',
  });
  response.write(secondPage);
  response.end();
};

const getThird = (request, response) => {
  response.writeHead(200, {
    'Content-Type': 'text/html',
  });
  response.write(thirdPage);
  response.end();
};

module.exports.getIndex = getIndex;
module.exports.getSecond = getSecond;
module.exports.getThird = getThird;
