
// import user_id_export from '../index_folder/index_js.js'
// alert("user id : "+user_id_export)
 

 function addProduct(f,d,p,s,m,i,del,u,i_url){
    
    
    
    const productData = {
        fullname:f,
        duration:d,
        per_day:p,
        star_product:s,
        more_info:m,
        is_rented:i,
        delivery:del,
        users_fk:u,
        image_url:i_url
    }
    
    
    alert("fullname: "+productData.fullname)
    alert("duration: "+productData.duration)
    alert("per_day: "+productData.per_day)
    alert("star_product: "+productData.star_product)
    alert("more_info: "+productData.more_info)
    alert("is_rented: "+productData.is_rented)
    alert("delivery: "+productData.delivery)
    alert("users_fk: "+productData.users_fk)
    alert("image_url: "+productData.image_url)    
    

    fetch(`http://localhost:3000/api/users/sport/${u}/sport_product`,
        {method:'POST',
        headers:{
        'Content-Type': 'application/json',
    },body:JSON.stringify(productData)
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
    
     alert("data in profile  is : "+data)
      
    window.location.href ="../MainPage_folder/MainPage.html"          
    return        
                      
    })
    .catch(error => {
     alert("wrong")
        console.error('Fetch error:', error); // Handle errors
    });
    
    }
    

    



