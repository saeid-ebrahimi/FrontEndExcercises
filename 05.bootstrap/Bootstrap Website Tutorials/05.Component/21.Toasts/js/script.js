const toastTrigger = document.getElementById('subscribe-btn')
const toastLiveExample = document.getElementById('subscribe')
const toastLiveExample2 = document.getElementById('subscribe2')
const toastLiveExample3 = document.getElementById('subscribe3')
const toastLiveExample4 = document.getElementById('subscribe4')

if (toastTrigger) {
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
    const toastBootstrap2 = bootstrap.Toast.getOrCreateInstance(toastLiveExample2)
    const toastBootstrap3 = bootstrap.Toast.getOrCreateInstance(toastLiveExample3)
    const toastBootstrap4 = bootstrap.Toast.getOrCreateInstance(toastLiveExample4)
    toastTrigger.addEventListener('click', () => {
        toastBootstrap.show()
        toastBootstrap2.show()
        toastBootstrap3.show()
        toastBootstrap4.show()

    })
}