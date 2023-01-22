
    let totalcart=localStorage.getItem("totalcart")
    let name=document.getElementById("name");
    let MobileNumber=document.getElementById("MobileNumber");
    let PinCode=document.getElementById("PinCode");
    let State=document.getElementById("State");
    let city=document.getElementById("city");
    let HouseNumber=document.getElementById("HouseNumber");
    let RoadLandMark=document.getElementById("RoadLandMark");
    let LocationCatch=document.getElementById("LocationCatch");
    let card=document.getElementById("card");
    card.textContent="$"+totalcart
    Save.addEventListener("click",(e)=>
    {
        e.preventDefault();
       let obj={
        name:name.value,
        MobileNumber:MobileNumber.value,
        PinCode:PinCode.value,
        State:State.value,
        city:city.value,
        HouseNumber:HouseNumber.value,
        RoadLandMark:RoadLandMark.value,
       };
       //console.log(obj);
       let address=JSON.parse(localStorage.getItem("address"))||[];
       localStorage.setItem("address",JSON.stringify(obj));
       alert("Order Placed Succesfully")
       window.location.assign("./index.html")

    });
    
