function check_reg(f,e,u,p,c,bd){
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
if(p != c){
    alert("please confirm your password")
    return ;
}

const regData = {
    fullname:f,
    email:e,
    username:u,
    password:p,
    BirthDate:bd,

}

alert("fullname: "+regData.fullname)
alert("email: "+regData.email)
alert("username: "+regData.username)
alert("password: "+regData.password)
alert("BirthDate: "+regData.BirthDate)


fetch('http://localhost:3000/api/users/onuser',
    {method:'POST',
    headers:{
    'Content-Type': 'application/json',
},body:JSON.stringify(regData)
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
    if(data ==="true"){
        window.location.href ="/views/MainPage.html"
    }

})
.catch(error => {
 alert("wrong")
    console.error('Fetch error:', error); // Handle errors
});

}

