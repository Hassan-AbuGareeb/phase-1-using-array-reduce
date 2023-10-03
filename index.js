const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

let totalBatteries=0;

const reducer = (batteries) =>{
   totalBatteries=batteries.reduce((totBattaries, battery)=>{
        return totBattaries+battery;
    },totalBatteries);
}
// Code your solution here
reducer(batteryBatches);
console.log(totalBatteries);