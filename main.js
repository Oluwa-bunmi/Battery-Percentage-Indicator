initBattery();
function initBattery() {
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
      if (level == 100) {
        batteryStatus.innerHTML = `Full battery <i class="fa-solid fa-battery-full green "></i>`;
        batteryLiquid.style.height = "103%"; // Hiding the ellipse
      } else if ((level <= 20) & !batt.charging) {
        batteryStatus.innerHTML = `Low battery <i class="fa-solid fa-plug animated-red"></i>`;
      } else if (batt.charging) {
        batteryStatus.innerHTML = `Charging... <i class="fa-solid fa-bolt-lightning animated-green"></i>`;
      } else {
        batteryStatus.innerHTML = "";
      }
      // Changing battery color and removing other colors
      if (level <= 20) {
        batteryLiquid.classList.add("gradientRed");
        batteryLiquid.classList.remove(
          "gradientGreen",
          "gradientOrange",
          "gradientYellow"
        );
      } else if (level <= 40) {
        batteryLiquid.classList.add("gradientOrange");
        batteryLiquid.classList.remove(
          "gradientGreen",
          "gradientRed",
          "gradientYellow"
        );
      } else if (level <= 80) {
        batteryLiquid.classList.add("gradientYellow");
        batteryLiquid.classList.remove(
          "gradientGreen",
          "gradientRed",
          "gradientOrange"
        );
      } else {
        batteryLiquid.classList.add("gradientGreen");
        batteryLiquid.classList.remove(
          "gradientYellow",
          "gradientRed",
          "gradientOrange"
        );
      }
    };

    updateBattery();
    // Battery Status Events
    batt.addEventListener("chargingchange", () => {
      updateBattery();
    });
    batt.addEventListener("levelchange", () => {
      updateBattery();
    });
  });
}
