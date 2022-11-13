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