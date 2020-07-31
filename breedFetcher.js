const request = require('request');
const breed = process.argv[2];

const fetchBreedDescription = (err, callback) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, function (error, response, body) {
    //error should be kept in it's own section - usually on top
    if (error) callback(error,null);
      // console.error('error:', error); // Print the error if one occurred
    
    // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    // console.log('body:', body); // Print the HTML for the Google homepage.
    // console.log(typeof body);

    const data = JSON.parse(body);
    console.log(data); //makes the output look organised.
    const firstElement = data[0];

    // EXPANDED FORM FOR LINE 30-31
    // if (!firstElement) {
    //   return callback('Requested breed not found!',null)
    //   // console.log('Requested breed not found!');
    // } else {
    //   return callback(null,firstElement.description) 
    //   // console.log('description: ', firstElement.description);

    // }
    //TERNARY OPERATOR for lines 20-24
    !firstElement ? callback('Requested breed not found!',null) : callback(null,firstElement.description); 

  });
}

module.exports = { fetchBreedDescription };

