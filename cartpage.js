let username=localStorage.getItem("user")
console.log(username)
let userDB=JSON.parse(localStorage.getItem("users"))
let span=document.querySelector("span");
span.textContent=username
span.style.fontFamily="sans-serif";



let logout=document.querySelector("#header2 button")
logout.addEventListener("click",()=>{
    window.location.assign("./Navbar.html")
})

let CartDB=JSON.parse(localStorage.getItem("cartproduct"))||[];
let div=document.getElementById("container");
// let span1=document.querySelector("#cost");
// span1.textContent=el.quantity*el.price
let span1=document.querySelector("#cost");
display(CartDB)

function display(data){
    
    div.innerHTML=null;
let sum=0;
    data.forEach((el)=>{
        sum+=el.quantity*el.price
    })
    span1.textContent="$"+sum;
    span1.style.color="green"
// span1.textContent=el.quantity*el.price
    data.forEach((el,i)=>{
        
        let card=document.createElement("div");
        let id=document.createElement("h2")
        let title=document.createElement("h4");
        let img=document.createElement("img");
        let category=document.createElement("h3");
        let price=document.createElement("p");
        let desc=document.createElement("p");
        // let rating=document.createElement("h4");
       let quantity=document.createElement("span")
       let Remove=document.createElement("button")
       let increment=document.createElement("button")
       let decrement=document.createElement("button")


       quantity.textContent=el.quantity;
       Remove.textContent="Remove";
       increment.textContent="+";
       decrement.textContent="-"
        img.src=el.avatar
        id.textContent=el.id;
        title.textContent=el.title
        category.textContent=el.category
        price.textContent="$"+el.price
        desc.textContent=el.description
         
        // rating.textContent=el.rating.rate;
        Remove.addEventListener("click",()=>{
           
          CartDB.splice(i,1)
            localStorage.setItem("cartproduct",JSON.stringify(CartDB))
            console.log(CartDB)
            display(CartDB)
    })

increment.addEventListener("click",()=>{
       el=el.quantity++
        localStorage.setItem("cartproduct",JSON.stringify(CartDB))
        display(CartDB)
})
decrement.addEventListener("click",()=>{
   if(el.quantity>1) {el=el.quantity--
     localStorage.setItem("cardproduct",JSON.stringify(CartDB))
     display(CartDB)}
})




        



        card.append(img,id,category,title,price,desc,increment,quantity,decrement,Remove)
        div.append(card)
    })
}
 