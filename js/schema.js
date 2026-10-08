import createActiveCard from "./activeCard.js";
import createBillCard from "./billCard.js";
import resource from "./model.js"
import createResourceCard from "./resourceCard.js";

function renderUI(){
    //  section select kiya
    const box=document.getElementById("mainContainer")
    box.innerHTML="";

    // resource par iterate  kr rhe hai 
    resource.forEach(res=>{
        const container=document.createElement("div");
        container.className="container";

        //  teno div ke liye function bana diya
        const resourceCard=createResourceCard(res);
        const activeCard=createActiveCard(res);
        const billCard=createBillCard(res);

        container.appendChild(resourceCard);
        container.appendChild(activeCard);
        container.appendChild(billCard);

        // container ko section wake div mein add kiya
        box.appendChild(container)
    })
    
}

export default renderUI;