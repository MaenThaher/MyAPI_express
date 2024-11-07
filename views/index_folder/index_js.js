export let user_id =-1;
export function check_login(u,p){
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

if(u == "" || p == ""){
    alert("Please fill all fields")
    return ;
}

const loginData = {
    username:u,
    password:p
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

 alert("data is : "+data)
 
 if(data!="-1"){
alert("inside data true")
        user_id = data;
        window.location.href ="../MainPage_folder/MainPage.html"
    }

})
.catch(error => {
 alert("wrong")
    console.error('Fetch error:', error); // Handle errors
});

}


// ---------------------------------

  

