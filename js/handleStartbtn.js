import renderUI from "./schema.js";
export default function handleStartbtn(res){
    // current user kitne hai aur maxCapicity se compare
    if(res.currentUser<res.maxCapicity){
        res.currentUser+=1;
         const currentTime = new Date().toLocaleTimeString();

        //  activeSession array mein  store ki user id, check in time start time
         res.activeSession.push({
            userNo: res.currentUser,
            time: currentTime,//as a string jayegi
            startTime: Date.now()// baad mein bill calculate karte time time chahiye isliye pass huaa
        });
        
        // ye sab change ui mein dikhne ki liye
        renderUI();
    }else{
        alert("there is no space is avalable")
    }
}