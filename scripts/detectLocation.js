async function detectLocation() {
  // Make a request to the ipapi service to get the user's location based on their IP address
  const response = await fetch('https://ipapi.co/json/');
  const data = await response.json();

  // Get the user's country from the response data
  const country = data.country_name;

  // Display a message that starts with "Hello, looks like you are from" and continues with the user's country
  console.log(`Hello, looks like you are from ${country}`);
}

// Call the function to detect the user's location
detectLocation();
