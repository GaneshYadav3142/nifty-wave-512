let username=localStorage.getItem("user")
console.log(username)
let userDB=JSON.parse(localStorage.getItem("users"))
let span=document.querySelector("span");
span.textContent=username

let url="https://fakestoreapi.com/products";

function fetchdata(){
fetch(url)
.then((request)=>{
    console.log(request);
    return request.json()
})
.then((data)=>{
    console.log(data)
    display(data)
})
.catch((err)=>{
    console.log(err)
})
}
fetchdata()
function display(data){
    let div=document.getElementById("container");
    div.innerHTML=null;
    data.forEach((el,i)=>{
        let card=document.createElement("div");
        let id=document.createElement("h2")
        let title=document.createElement("h4");
        let img=document.createElement("img");
        let category=document.createElement("h3");
        let price=document.createElement("p");
        let desc=document.createElement("p");
        let rating=document.createElement("h4");

        img.src=el.image
        id.textContent=el.id;
        title.textContent=el.title
        category.textContent=el.category
        price.textContent="$"+el.price
        desc.textContent=el.desc
        rating.textContent=el.rating.rate;

        card.append(img,id,category,title,price,rating,desc)
        div.append(card)
    })
}