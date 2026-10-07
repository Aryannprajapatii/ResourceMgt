export default function createBillCard(res){
     const billCard=document.createElement("div");
    billCard.className="billDetail";

     billCard.innerHTML = `
             <h3>Bill detail billCard.js</h3>
             <h3>${res.name}</h3>
         `;

    return billCard;
} 