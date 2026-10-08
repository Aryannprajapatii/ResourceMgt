import handleExitbtn from "./handleExit.js";
import handleUser from "./handleUser.js";
 

export default function createActiveCard(res){
     const activeCard=document.createElement("div");
        activeCard.className="activeDetail";

        // handleUser fuction se ek arr mila sessionDetail ka with exit btn
        const sessionDetail= handleUser(res);

         activeCard.innerHTML = `
             <h3>No. Of Active User in ${res.name} </h3>
               <h3>${sessionDetail}</h3>
          `;

        //   active card mein jo jo class exit naam se hai wo sab select ho ajyegi
        const exitbtn=activeCard.querySelectorAll(".exit");
        exitbtn.forEach(btn=>{
            btn.addEventListener("click",(e)=>{
                const idx=e.target.getAttribute("user-index");
                handleExitbtn(res, idx);
            })
        })

     return activeCard;
}