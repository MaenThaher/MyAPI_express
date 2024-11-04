function check_login(){
    fetch('http://localhost:3000/api/users/onuser') // Replace '/api/data' with your actual endpoint
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
       // return response.json(); // Parse JSON response
     
    })
    .then(data => {
        console.log(data); // Handle the data
    })
    .catch(error => {
        console.error('Fetch error:', error); // Handle errors
    });

}

