import handleExitbtn from "./handleExit.js";
import handleUser from "./handleUser.js";
 

export default function createActiveCard(res){
     const activeCard=document.createElement("div");
        activeCard.className="activeDetail";

        const sessionDetail= handleUser(res)
         activeCard.innerHTML = `
             <h3>active detail </h3>
             <h3>${res.name}</h3>
              <h3>${sessionDetail}</h3>
          `;

        const exitbtn=activeCard.querySelectorAll(".exit");
        exitbtn.forEach(btn=>{
            btn.addEventListener("click",(e)=>{
                const idx=e.target.getAttribute("user-index");
                handleExitbtn(res, idx);
            })
        })

     return activeCard;
}