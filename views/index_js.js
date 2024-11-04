function check_login(){
    // fetch('http://localhost:3000/api/users/onuser/login') // Replace '/api/data' with your actual endpoint
    // .then(response => {
    //     if (!response.ok) {
    //         throw new Error('Network response was not ok ' + response.statusText);
    //     }
    //     //   return response.json(); // Parse JSON response
    
    // })
    // .then(data => {
    //     console.log(data); // Handle the data

    // })
    // .catch(error => {

    //     console.error('Fetch error:', error); // Handle errors
    // });
//////////

const loginData = {
    username:"omar",
    password:"22222"
}

alert("username: "+loginData.username)
alert("password: "+loginData.password)
fetch('http://localhost:3000/api/users/onuser/login',
    {method:'POST',
    headers:{
    'Content-Type': 'application/json',
},body:JSON.stringify(loginData)
}) // Replace '/api/data' with your actual endpoint
.then(response => {

    if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
    }
//  alert(""+response.text())
 return response.text()
    //       return response.json(); // Parse JSON response

})

.then(data => {


    if(data ==="true"){
        window.location.href ="/views/register.html"
    }

})
.catch(error => {

    console.error('Fetch error:', error); // Handle errors
});

}

