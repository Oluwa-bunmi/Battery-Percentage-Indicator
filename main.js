initBattery()
function initBattery(){
    const batteryLiquid = document.querySelector("batteryLiquid");
    const batteryStatus = document.querySelector(".status");
    const batteryPercent = document.querySelector("<h1>");

    navigator.getBattery().then((batt) => {
        updateBattery = () => {
// Updating the number level of battery
        }
        updateBattery()
    })
}