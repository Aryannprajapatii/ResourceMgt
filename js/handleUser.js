
export default function  handleUser(res){

    // activeSession array ko map kiya har session ka userno aur start time ko niche show kiya
     let sessionDetail = res.activeSession.map((session,index) => `
            <div class="user">
            <span>User ${session.userNo} - Start Time: ${session.time}</span>
            <button class="exit" user-index="${index}" >exit</button>
            </div>
            `).join('');
            
            //yaha pr user-index mein index store kiya jo map function li by default properties hoti hai 
            // taki jab exit button click ho index ke base pr find kar sake array mein
      

    return sessionDetail;
}