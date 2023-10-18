const hello = {
    name: "welcomeBot",
    speak: function (to){
        return this.name + ' says "welcome, ' + to + '."';
    }
}

const goodBye = {
    name: "FarewellBot",
    speak: function (to){
        return this.name + ' says "goodbye, ' + to + '."';
    }
}

console.log(hello.speak.call(goodBye, "Kalim"))
console.log(hello.speak.apply(goodBye, ["Kalim"]))

const speak = hello.speak
console.log(speak("Karam"))
console.log(speak.call({name: "Akram"}, "Asghar"))

const newSpeak = hello.speak.bind(goodBye)
console.log(newSpeak("Zara"))
setTimeout(hello.speak.bind(goodBye), 1000, "Susan")