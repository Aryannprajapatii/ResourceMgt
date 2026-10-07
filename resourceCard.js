export default function createResourceCard(res){
    // resouce card ke liye div banaya
    const resourceCard=document.createElement("div");
    resourceCard.className="resourceDetail";
    
    // resource le innerHtml mein data add kiya
    resourceCard.innerHTML = `
        <h3>${res.name}</h3>
        <p><strong>Capacity:</strong> ${res.currentUser} / ${res.maxCapicity}</p>
        <p><strong>Pricing:</strong> ₹${res.firstHourCost} (1st hr) + ₹${res.additionalHourCost}/hr (extra)</p>
        <div class="btn-group">
            <button class="btn-start">Start Usage</button>
        </div>  
    `;
    return resourceCard;
}