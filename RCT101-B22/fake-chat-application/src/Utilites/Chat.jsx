export const user=[
    {
        id:1,
        name:"Abhi"
    },
    {
        id:2,
        name:"Ashu"
    }
];
function createConnection(user){
    console.log(`started listening to ${user.name}`);
    let id;
    function listen(callback){
        id=setInterval(()=>{
            let message=`new message from ${user.name} at ${Date.now()}`
            callback(message);
        },1000)
    }
    function unsubscribe(){
        console.log(`stoped listening to ${user.name}`);
        clearInterval(id);
    }
    return{listen,unsubscribe}
}
export default createConnection;