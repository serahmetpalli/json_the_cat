const request = require('request');
const breed = process.argv[2];


request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, function(error, response, body) {

  console.error('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
  console.log(typeof body);

  
  
  // //if requested breed is not found, then print out appropriate message
  
  if (error !== null) {
    console.log('Error:', error.message);
    process.exit();
  }
  
  const data = JSON.parse(body);
  if (data.length === 0) {
    console.log('Requested breed not found!');
  } else {
    //accessing the first element in the array and printing out the description for the user
    // console.log('first element description', data[0]);
    
    const firstElement = data[0];
    console.log('description: ', firstElement.description);
       
    // console.log('data', data);
    // console.log('typeof:', typeof data);
  }
});




