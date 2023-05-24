const button = document.querySelector('.wrapper')

button.addEventListener("click", () => {
    if (window.navigator.getBattery){
        window.navigator.getBattery()
            .then( batteryInfo => {
                console.log(batteryInfo)
                if (batteryInfo.charging){
                    console.log('your charger is plugged in')
                }else{
                    console.log('your charger is unplugged')
                }
                batteryInfo.addEventListener("chargingChange", () => {
                    if (batteryInfo.charging){
                        console.log('your charger is plugged in')
                    }else{
                        console.log('your charger is unplugged')
                    }
                })
                batteryInfo.addEventListener("levelchange", () => {
                    console.log("your current battery level:",batteryInfo.level *100,"%")
                })
            })
    }

})
