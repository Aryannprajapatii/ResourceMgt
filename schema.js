import resource from "./model.js"

function renderUI(){
    //  section select kiya
    const box=document.getElementById("mainContainer")
    box.innerHTML="";

    // resource par iterate  kr rhe hai 
    resource.forEach(res=>{
        const container=document.createElement("div");
        container.className="container";
 
        // container mein 3 div define kiya resource, active user , bill
        // resource 
        const resourceCard=document.createElement("div");
        resourceCard.className="resourceDetail";

         // active 
        const activeCard=document.createElement("div");
        activeCard.className="activeDetail";

         // resource 
        const billCard=document.createElement("div");
        billCard.className="billDetail";

        // teno div ke innerHtml mein data add 

        // resource body
        resourceCard.innerHTML = `
             <h3>resource detail</h3>
             <h3>${res.name}</h3>
         `;

        // active body
        activeCard.innerHTML = `
             <h3>active detail</h3>
             <h3>${res.name}</h3>
          `;

        // bill body
        billCard.innerHTML = `
             <h3>Bill detail</h3>
             <h3>${res.name}</h3>
         `;

        container.appendChild(resourceCard);
        container.appendChild(activeCard);
        container.appendChild(billCard);

        box.appendChild(container)
    })
    
}

export default renderUI;