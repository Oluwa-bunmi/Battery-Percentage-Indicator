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
        }
       
        updateBattery()
    })
}