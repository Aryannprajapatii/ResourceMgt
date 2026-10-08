export default function createBillCard(res){
     const billCard=document.createElement("div");
    billCard.className="billDetail";

       let billDetailsHTML = `<p>No bill generated yet.</p>`;
        if (res.billDetail) {
            billDetailsHTML = `
                <p><strong>User No:</strong> ${res.billDetail.userNo}</p>
                <p><strong>Start Time:</strong> ${res.billDetail.startTime}</p>
                <p><strong>Exit Time:</strong> ${res.billDetail.exitTime}</p>
                <p><strong>No. of Hours:</strong> ${res.billDetail.hours} hr(s)</p>
                <p><strong>Total Bill:</strong> ₹${res.billDetail.bill}</p>
            `;
        }

        billCard.innerHTML = `
             <h3>Bill detail of ${res.name}</h3>
              ${billDetailsHTML}
        `;

    return billCard;
} 