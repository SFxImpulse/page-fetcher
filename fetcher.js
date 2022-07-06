//Create a node app called fetcher which should:
  
  // Take two command line arguments:
  
    // 1. a URL
    // 2. a local file path.

  // It should download the resource at the URL to the local path-
  // on your machine.

  // Upon completion, it should print out a message with the bytes-
  // and location downloaded to.

    // To get byte size, assign a variable to the length of the file-
    // and call it with template literals.

// There are 2 operations in this problem which will take an unknown-
// amount of time.

  // 1. You need to make an http request and wait for the response.
  
  // 2. After the http request is complete, you need to take the-
  // data you receive and write it to a file in your local filesystem.

// To control the order of async operations, you need to nest callbacks.

const args = process.argv.slice(2);

const request = require('request');
const fs = require("fs");

request(args[0], (error, response, body) => {
  const content = body;
  fs.writeFile(args[1], content, err => {
    if (err) {
      console.error(err);
    }
    console.log(`Downloaded and saved ${body.length} bytes to ${args[1]}`)
  });
});
