
export default function  handleUser(res){
     let sessionDetail = res.activeSession.map((session,index) => `
            <div class="user">
            <span>User ${session.userNo} - Start Time: ${session.time}</span>
            <button class="exit" user-index="${index}" >exit</button>
            </div>
            `).join('');

      

    return sessionDetail;
}