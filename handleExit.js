 import renderUI from "./schema.js";

export default function handleExitbtn(res,idx){
     const session = res.activeSession[idx];

    // 1. Duration calculate karein (milliseconds se hours mein)
    const endTime = Date.now();
    const durationMs = endTime - session.startTime;
    const durationHours = durationMs / (1000 * 60 * 60);

    // 2. Assignment rule ke mutabiq next complete hour par round up karein
    const billableHours = Math.max(1, Math.ceil(durationHours));

    // 3. Bill Amount calculate karein
    let totalBill = 0;
    if (billableHours === 1) {
        totalBill = res.firstHourCost;
    } else {
        totalBill = res.firstHourCost + (billableHours - 1) * res.additionalHourCost;
    }

    // 4. Resource object mein last bill store karein taaki billCard mein show ho sake
    res.lastBill = {
        userNo: session.userNo,
        startTime: session.time,
        hours: billableHours,
        bill: totalBill,
        exitTime:new Date().toLocaleTimeString()
    };

    // 5. Active session se user remove karein aur count kam karein
    res.activeSession.splice(idx, 1);
    res.currentUser -= 1;

    // 6. UI refresh karein
    renderUI();
}