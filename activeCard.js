export default function createActiveCard(res){
     const activeCard=document.createElement("div");
        activeCard.className="activeDetail";

         activeCard.innerHTML = `
             <h3>active detail in activeCard.js</h3>
             <h3>${res.name}</h3>
          `;

          return activeCard;
}