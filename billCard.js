export default function createBillCard(res){
     const billCard=document.createElement("div");
    billCard.className="billDetail";

       let billDetailsHTML = `<p>No bill generated yet.</p>`;
        if (res.lastBill) {
            billDetailsHTML = `
                <p><strong>User No:</strong> ${res.lastBill.userNo}</p>
                <p><strong>Start Time:</strong> ${res.lastBill.startTime}</p>
                <p><strong>Exit Time:</strong> ${res.lastBill.exitTime}</p>
                <p><strong>No. of Hours:</strong> ${res.lastBill.hours} hr(s)</p>
                <p><strong>Total Bill:</strong> ₹${res.lastBill.bill}</p>
            `;
        }

        billCard.innerHTML = `
             <h3>Bill detail</h3>
             <h3>${res.name}</h3>
             ${billDetailsHTML}
        `;

    return billCard;
} 