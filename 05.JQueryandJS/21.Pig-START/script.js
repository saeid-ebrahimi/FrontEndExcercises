(function (){
    "use strict"
    const startGameBtn = document.getElementById("startgame")
        const gameControl = document.getElementById("gamecontrol")
        const game = document.getElementById("game")
        const actionArea = document.getElementById("actions")
        const score = document.getElementById("score")

        const gameData = {
            dices : ["1die.jpg", "2die.jpg", "3die.jpg", "4die.jpg", "5die.jpg", "6die.jpg"],
            players: ["player1","player2"],
            scores: [0,0],
            roll1: 0,
            roll2: 0,
            rollsSum: 0,
            gameEnd : 29,
            index: 0
        }
        gameControl.addEventListener("click",function (){
            gameData.index = Math.round(Math.random())
            gameControl.innerHTML = '<h2>the game has started!</h2>'
            gameControl.innerHTML += "<button id='quit'>DO you want to quit?</button>"
            document.getElementById("quit").addEventListener("click",function (){
                location.reload()
            })
            setTurn()
        })
        function setTurn(){
            const player = gameData.players[gameData.index]
            game.innerHTML = `<h2>it's player ${player} turn</h2>`
            game.innerHTML += `<h3>roll the dice for ${player}`
            actionArea.innerHTML = "<button id='roll'>Roll the dice</button>"
            document.getElementById("roll").addEventListener("click",function(){
                throwDice()
            })
        }

        function throwDice(){
            actionArea.innerText = ""
            gameData.roll1 = Math.ceil(Math.random() * 6)
            gameData.roll2 = Math.ceil(Math.random() * 6)
            game.innerHTML = `<p>Roll the dice for ${gameData.players[gameData.index]}</p>`
            game.innerHTML += `<img src="${gameData.dices[gameData.roll1 -1]}" alt="dice">`
            game.innerHTML += `<img src="${gameData.dices[gameData.roll2 -1]}" alt="dice">`
            gameData.rollsSum = gameData.roll1 + gameData.roll2
            /*actionArea.innerHTML += "<button id='roll'>Roll the dice</button>"
            throwDice()*/
            if (gameData.roll1 === 1 && gameData.roll2 === 1){
                // snake eyes occured
                //console.log("snake eye")

                game.innerHTML += "<p> oohh snap! snake eyes!"
                gameData.scores[gameData.index] = 0
                gameData.index ? gameData.index = 0 : gameData.index = 1
                showCurrentScore()
                setTimeout(setTurn, 2000)
            }else if(gameData.roll1 === 1 || gameData.roll2 === 1 ){
                // one of them is one
                //console.log("one of them is one")
                gameData.index ? gameData.index = 0 : gameData.index = 1
                game.innerHTML += `<p>You rolled a 1, switching to ${gameData.players[gameData.index]}</p>`
                setTimeout(setTurn, 2000)
            }else {
                // continue playing current player
                //console.log("current player should continue, roll again or pass")
                gameData.scores[gameData.index] += gameData.rollsSum
                actionArea.innerHTML = "<button id='rollagain'>Rolling Again</button> or <button id='pass' >Pass</button>"
                document.getElementById("rollagain").addEventListener("click",function (){
                    throwDice()
                })
                document.getElementById("pass").addEventListener("click",function (){
                    gameData.index? gameData.index = 0:gameData.index = 1
                    setTurn()
                })
                checkWining()
            }

        }
        function checkWining(){
            if (gameData.scores[gameData.index] > gameData.gameEnd){
                score.innerHTML = `<h2>${gameData.players[gameData.index]} wins the game with score ${gameData.scores[gameData.index]}</h2>`
                actionArea.innerHTML = ""
                gameData.scores = [0,0]
                document.getElementById("quit").innerText = "Start a new game!"
            }else{
                showCurrentScore()
            }
        }
        function showCurrentScore(){
            score.innerHTML = `<p>score for ${gameData.players[0]} is ${gameData.scores[0]} </p>`
            score.innerHTML += `<p>score for ${gameData.players[1]} is ${gameData.scores[1]}</p>`

        }
})()