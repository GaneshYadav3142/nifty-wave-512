let username=localStorage.getItem("user")
console.log(username)
let userDB=JSON.parse(localStorage.getItem("users"))
let span=document.querySelector("span");
span.textContent=username

let url="https://fakestoreapi.com/products";
// let fetcharr=[]

fetch(url)
.then((request)=>{
    console.log(request);
    return request.json()
})
.then((data)=>{
    // fetcharr=data;
    console.log(data)
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