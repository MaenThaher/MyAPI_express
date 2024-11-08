
 //////////////////////////

 alert(123)

    fetch('http://localhost:3000/api/users/sport/') // Replace '/api/data' with your actual endpoint
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
           return response.json(); // Parse JSON response
    
    })
    .then(data => {
      
        console.log("data is: "+data[0].fullname); // Handle the data
        ////start secend fetch
 
       
     
        fetch('../product_div/product.html')  // Replace with the correct path to the HTML file
        .then(response => response.text())  // Convert the response to text
        .then(html => {
            // Insert the HTML into the content div
           alert("inside secend fetch")
         //  console.log(html)
          
          let sl = document.getElementById("slider")
           let parser = new DOMParser();
           let doc = parser.parseFromString(html, 'text/html');
           alert("Before card")  
           // Now you can access specific divs or elements within the fetched HTML
           let product_card = doc.querySelector('#product-card');  // Replace with the specific div's ID
          alert("after card "+product_card)
           let product_image = product_card.querySelector('#product-image');  // Replace with the specific div's ID
           let product_info = product_card.querySelector('#product-info');  // Replace with the specific div's ID
           let product_title = product_card.querySelector('#product-title');  // Replace with the specific div's ID
           let product_description = product_card.querySelector('#product-description');  // Replace with the specific div's ID
           let product_price = product_card.querySelector('#product-price');  // Replace with the specific div's ID
           let star_product = product_card.querySelector('#star-product');  // Replace with the specific div's ID
           let is_rented = product_card.querySelector('#is-rented');  // Replace with the specific div's ID
           let delivery = product_card.querySelector('#delivery');  // Replace with the specific div's ID
           let user_fk = product_card.querySelector('#user-fk');  // Replace with the specific div's ID
           let add_to_cart_btn = product_card.querySelector('#add-to-cart-btn');  // Replace with the specific div's ID
            
           let temp_productCard = document.createElement('span')
           alert("product_title: "+product_card)
           
           for(let i =6;i<data.length;i++) {
           
           alert("imageUrl: "+data[i].image_url)
           alert("moreinfo: "+data[i].more_info)
           alert("fullname: "+data[i].fullname)
           alert("per_day: "+data[i].per_day)
           alert("star_product: "+data[i].star_product)
           alert("is_rented: "+data[i].is_rented)
           alert("Delivery: "+data[i].delivery)
           alert("users_fk: "+data[i].users_fk)
 
           product_image.src=data[i].image_url
           product_description = data[i].more_info
           product_title=data[i].fullname
           product_price = data[i].per_day
           star_product = data[i].star_product
           is_rented = data[i].is_rented
           delivery = data[i].delivery
           user_fk = data[i].users_fk

            temp_productCard = product_card;
           sl.appendChild(temp_productCard)
          //  temp_productCard.className('../product_div/product.css')
         //  document.body.appendChild(product_card)
           
             
           }
            
           //let myPr = document.createElement('div')


           // Check if the div exists
           if (product_card) {
//            console.log(product_card)
            alert("there is div "+product_card)
               // Insert the content of the div into the current page
             //  document.getElementById('content').innerHTML = product_card.innerHTML;
           } else {
               console.error('Div not found');
           }



        })
        .catch(error => console.error('Error loading the page:', error));


      //end first fetch from user/sport    
    })
    .catch(error => {
      alert(333)
        console.error('Fetch error:', error); // Handle errors
    });


