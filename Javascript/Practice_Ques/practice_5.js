random = Math.floor(Math.random() * 100);

num = prompt("Enter an integer(0-100)");

while (random != num) {
    if (num > 100)
        num = prompt("Wrong Input");
    else if (random > num)
        num = prompt("Go Higher");
    else if (random < num)
        num = prompt("Go Lower");
    else
        num = console.log("You Won");
}