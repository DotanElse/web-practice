console.log("Hello, World!")

function capitalizeFirstLetter(text)
{
    return text[0].toUpperCase() + text.substr(1)
}

console.log(capitalizeFirstLetter("eLSE"))

FizzBuzz(parseInt(prompt("Please enter the number you would like to FizzBuzz up to: ")));

function FizzBuzz(max)
{
    for(let i=1; i<max; i++)
    {
        result = ""
        if(!(i%3))
            result+="Fizz"
        if(!(i%5))
            result+="Buzz"
        if(!result)
            result+=i
        console.log(result);
    }
}

RockPaperScissors()

function RockPaperScissors()
{
    const optionsArr= ["rock", "paper", "scissors"]
    let playerPoints = 0
    let computerPoints = 0
    for(let i=0; i<5; i++)
    {
        let playerChoice
        do
        {
            playerChoice = prompt("Please enter your choice (rock, paper, scissors):")
            playerChoice = playerChoice.toLowerCase()
        }while(!optionsArr.includes(playerChoice))
        computerChoice = optionsArr[Math.floor(Math.random() * optionsArr.length)]
        console.log("computerChoice is" + computerChoice)
        if(playerChoice != computerChoice)
        {
            computerChoiceVal = optionsArr.indexOf(computerChoice)
            playerChoiceVal = optionsArr.indexOf(playerChoice)
            if((computerChoiceVal+1)%3==playerChoiceVal)
            {
                playerPoints+=1
                alert("Player win this round")
            }

            else
            {
                computerPoints+=1
                alert("Computer win this round")
            }
        }
    }
    if(playerPoints > computerPoints)
        alert("Wohoo player wins i guess")
    else
        alert("Bohoo player loses i guess")

}