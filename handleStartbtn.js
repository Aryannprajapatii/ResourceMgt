import renderUI from "./schema.js";
export default function handleStartbtn(res){
    if(res.currentUser<res.maxCapicity){
        res.currentUser+=1;
         console.log(res.currentUser);
        console.log("buttton is clicked");
        const currentTime = new Date().toLocaleTimeString();
        console.log(currentTime)
        res.activeSession.push({
            userNo: res.currentUser,
            time: currentTime,
            startTime: Date.now()
        });
        
        renderUI();
    }else{
        alert("there is no space is avalable")
    }
}