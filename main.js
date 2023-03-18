const output = document.getElementById('output');
const result = output.children[0];
const choosings = output.children[1];
const arr = ['rock', 'paper', 'scissor'];

const run = (value) => {
    let computer = arr[Math.floor(Math.random() * arr.length)]
    if (value == computer) {
        result.innerText = "It's a draw";

        choosings.innerText = `You : ${value}  |  Computer : ${computer}`;

        // console.log("draw " + computer);
    }
    else if (value == 'rock' && computer == 'scissor') {
        result.innerText = "Yeah! You Won";

        choosings.innerText = `You chose : ${value}  | Computer : ${computer}`;

        // console.log("You Win : " + computer);
    }
    else if (value == 'scissor' && computer == 'paper') {
        result.innerText = "Yeah! You Won";

        choosings.innerText = `You : ${value}  |  Computer : ${computer}`;

        // console.log("You Win : " + computer);
    }
    else if (value == 'paper' && computer == 'rock') {
        result.innerText = "Yeah! You Won";

        choosings.innerText = `You : ${value}  |  Computer : ${computer}`;


        // console.log("You Win : " + computer);
    }
    else {
        result.innerText = "Computer Won";

        choosings.innerText = `You : ${value}  |  Computer : ${computer}`;


        // console.log("Computer Wins :" + computer);
    }

}

const stop = () => {
    result.innerText = "";
    choosings.innerText = "";
}
