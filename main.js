initBattery()
function initBattery(){
    const batteryLiquid = document.querySelector("batteryLiquid");
    const batteryStatus = document.querySelector(".status");
    const batteryPercent = document.querySelector("<h1>");

    navigator.getBattery().then((batt) => {
        updateBattery = () => {
          // Updating the number level of battery
          let level = Math.floor(batt.level * 100);
          batteryPercent.innerHTML = level + " %";
          // Updating background level of battery
          batteryLiquid.style.height = `${parseInt(batt.level * 100)}%`;
// Validating full and low battery and if it's not charging
if(level == 100){
batteryStatus.innerHTML = `Full battery`
batteryLiquid.style.height = '103%' // Hiding the ellipse
}
else if(level <= 20 &! batt.charging){
batteryStatus.innerHTML = `Low battery`;
}




        }
       
        updateBattery()
    })
}