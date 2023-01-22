let username=localStorage.getItem("user")
console.log(username)
let userDB=JSON.parse(localStorage.getItem("users"))
let span=document.querySelector("span");
span.textContent=username
span.style.fontFamily="sans-serif";



let logout=document.querySelector("#out>button:nth-child(2)")
logout.addEventListener("click",()=>{
    window.location.assign("./index.html")
})

 let checkout=document.querySelector("#out>button:nth-child(1)");
 checkout.addEventListener("click",()=>{
     window.location.assign("./payment.html")
})

let CartDB=JSON.parse(localStorage.getItem("cartproduct"))||[];
let div=document.getElementById("container");
let span1=document.querySelector("#cost");

display(CartDB)
let totalcart=(localStorage.setItem("totalcart"))
function display(data){
    
    div.innerHTML=null;
let sum=0;
    data.forEach((el)=>{
        sum+=el.quantity*el.price
    })
    span1.textContent="$"+sum;
    span1.style.color="green";
     localStorage.setItem("totalcart",sum)
     console.log(localStorage.setItem("totalcart",sum))
    data.forEach((el,i)=>{
        
        let card=document.createElement("div");
        let id=document.createElement("h2")
        let title=document.createElement("h4");
        let img=document.createElement("img");
        let category=document.createElement("h3");
        let price=document.createElement("p");
        let desc=document.createElement("p");
       let quantity=document.createElement("span")
       let Remove=document.createElement("button")
       let increment=document.createElement("button")
       let decrement=document.createElement("button")
       quantity.style.color="#ffffff";
       quantity.style.padding="5px"

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
 