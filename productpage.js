let username=localStorage.getItem("user")
console.log(username)
let userDB=JSON.parse(localStorage.getItem("users"))
let span=document.querySelector("span");
span.textContent=username
span.style.fontFamily="sans-serif"

let url="https://63c92f80c3e2021b2d515fda.mockapi.io/products";
 let product=[]

fetch(url)
.then((request)=>{
    console.log(request);
    return request.json()
})
.then((data)=>{
    // fetcharr=data;
    // console.log(data)
     product=[...data];
     console.log(product)
   filterdata(data)
    display(data)
})
.catch((err)=>{
    console.log(err)
})







function filterdata(data){
    let form=document.querySelector("form");

    form.addEventListener("submit",(e)=>{
       
        e.preventDefault();
       
        let searchform=form.search.value;
       //                              console.log(searchform)
         let filtered=data.filter(el=>el.title.toLowerCase().includes(searchform.toLowerCase()))
        //     // if(el.title.toUpperCase().includes(searchform.toUppercase())===true){
        //     //     return el
        //     // }
        //     // else{
        //     //     return false
        //     // }
        
         display(filtered)
         console.log(filtered)
    
    })
}


let cart=document.getElementById("cart")
cart.addEventListener("click",(e)=>{
    e.preventDefault()
    window.location.assign('./cartpage.html')
})






let CartDB=JSON.parse(localStorage.getItem("cartproduct"))||[];
let div=document.getElementById("container");

function display(data){
   
    div.innerHTML=null;
    data.forEach((el,i)=>{
        let card=document.createElement("div");
        let id=document.createElement("h2")
        let title=document.createElement("h4");
        let img=document.createElement("img");
        let category=document.createElement("h3");
        let price=document.createElement("p");
        let desc=document.createElement("p");
        // let rating=document.createElement("h4");
        let addtocart=document.createElement("button")
        addtocart.textContent="Add to Cart"

        img.src=el.avatar
        id.textContent=el.id;
        title.textContent=el.title
        category.textContent=el.category
        price.textContent="$"+el.price
        desc.textContent=el.description
        // rating.textContent=el.rating.rate;



      
        addtocart.addEventListener("click",()=>{
          
            
             if(duplicate(el)){
                alert("Product Already in cart")
             }
             else{
            CartDB.push({...el,quantity:1});
            localStorage.setItem("cartproduct",JSON.stringify(CartDB))
            alert("Product added to Cart")
             }
        })



        card.append(img,id,category,title,price,desc,addtocart)
        div.append(card)
    })
}
function duplicate(el){
    for(let i=0;i<CartDB.length;i++){
        if(CartDB[i].id===el.id){
            return true
        }
    }
    return false
    }

    let sort = document.querySelector('#sort');
    // we add event to it.
    sort.addEventListener('change',function(event){
        // get the value of selected sort condition
        // we can get the value using event.target.value
        if(event.target.value==='-'){
            // we don't want to change anything.
           
        }
        else{
            if(event.target.value ==="priceAsc"){
                // we get old data.
                // here we are modifying the original productDB
                // we already have productDB so we are not getting the old data again.
                // we modify data
                product.sort(function(a,b){
                    return a.price-b.price;
                })
                // store the data
               // localStorage.setItem('productDB',JSON.stringify(productDB));
                // we update the display
                display(product);
            }
            else if(event.target.value==="priceDes"){
                // please finish this
                product.sort(function(a,b){
                    return b.price-a.price;
                })
                display(product);
            }
           
        }
    })