import handleStartbtn from "./handleStartbtn.js";

export default function createResourceCard(res){
    // resouce card ke liye div banaya
    const resourceCard=document.createElement("div");
    resourceCard.className="resourceDetail";
    
    // resource le innerHtml mein data add kiya
    resourceCard.innerHTML = `
        <h3>${res.name} Details</h3>
        <p><strong>Capacity:</strong> ${res.currentUser} / ${res.maxCapicity}</p>
        <p><strong>Pricing:</strong> ₹${res.firstHourCost} (1st hr) + ₹${res.additionalHourCost}/hr (extra)</p>
        <button class="btn-start">Start Usage</button>
    `;

    // start usage btn ko activeCard ke sath connect karne ke liye
     const startBtn = resourceCard.querySelector(".btn-start");
         startBtn.addEventListener("click", () => {
            handleStartbtn(res); // Yahan 'res' pass karna hai
            });
    return resourceCard;
}