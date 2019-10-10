const Diagnostics = require('Diagnostics');
const Scene = require('Scene');
const Animation = require('Animation');


const ball = Scene.root.find('ball');
const left = Scene.root.find('left')
const right = Scene.root.find('right')


const timeDriverParameters = {
    durationMilliseconds: 3000,
    loopCount: Infinity,
    mirror: true
  };

  const timeDriver = Animation.timeDriver(timeDriverParameters);
  const quadraticSampler = Animation.samplers.easeInOutBounce(-0.5, 0.5);
  const translationAnimation = Animation.animate(timeDriver, quadraticSampler);
  ball.transform.y = translationAnimation;
  timeDriver.start();

let parts = 0;
let velocity = 300;
class Generator {
    genereteNumber(numbers) {
        // od 0 do countOfNumbers
        return Math.floor(Math.random() * numbers);
    }
}




// for (x = 0; x < left.; x++) {
//     for (y = 0; y < board[x].length; y++) {
//        // console.log(board[x]);
//         if (board[x][y] == 0) {
//             if (board[x][y + 1] === "X" && board[x + 1][y] === "X") {
//                 startRunBall.push([x, y]); // prawy dolny róg
//                  // board[x][y] = 100;
//             } else if (board[x][y - 1] === "X" && board[x - 1][y] === "X") {
//                 startRunBall.push([x, y]); // lewy górny róg

//             } else if (board[x][y - 1] === "X" && board[x + 1][y] === "X") {
//                 startRunBall.push([x, y]); // lewy dolny róg

//             } else if (board[x][y + 1] === "X" && board[x - 1][y] === "X") {
//                 startRunBall.push([x, y]); // prawy górny róg

//             }
//         }
//     }
// }
// // position of start 100
// let randomXY = function() {
//     let random = new Generator().genereteNumber(
//         startRunBall.length
//     );
//     return startRunBall[random];
//     console.log(`---------------------- starts from: ${startRunBall[random]} -----------------------`);
// };

// let newXY = randomXY();
// board[newXY[0]][newXY[1]] = 100;
// console.log(board);
// // ustawiania pozycji

// let position = {
//     x: newXY[0],
//     y: newXY[1]
// };

// let stopPostition = { x: newXY[0], y: newXY[1] };

// let vector = {
//     x: 1,
//     y: 1
// };
// // ruch pilki
// class BallMoving {
//     move() {
//         board[position.x][position.y] = "0";
//         position.x = position.x + vector.x;
//         position.y = position.y + vector.y;
//         board[position.x][position.y] = 100;
//     }
//     movingStop(positionToStop, stopAfterSteps) {
//         // check if its back to starting position
//         if (position.x == positionToStop.y && position.y == positionToStop.y) {
//             console.log(position.x, position.y);
//             clearInterval(interval);
//         } else if (parts >= stopAfterSteps) {
//             // stop after X parts
//             console.log(
//                 `can't back to position ${positionToStop.x}, ${positionToStop.y}`
//             );
//             clearInterval(interval);
//         }
//     }
// }

// let interval = setInterval(function() {
//     // wall?
//     if (board[position.x + vector.x][position.y] == "X") {
//         vector.x = vector.x * -1;
//     }
//     if (board[position.x][position.y + vector.y] == "X") {
//         vector.y = vector.y * -1;
//     }
//     //  Y ?
//     if (board[position.x + vector.x][position.y + vector.y] == "Y") {
//         new BallMoving().move();
//         new Generator().genereteNumber(2) == 0
//             ? (vector.x = -1)
//             : (vector.x = 1);
//         new Generator().genereteNumber(2) == 0
//             ? (vector.y = -1)
//             : (vector.y = 1);
//         console.log(vector.x, vector.y);
//     } else {
//         // ruszaj
//         new BallMoving().move();
//     }
//     //wyswitlanie czesci kokow
//     console.log(
//         `------------------------ parts : ${parts} ------------------------ `
//     );
//     console.log(board);

//     new BallMoving().movingStop(stopPostition, 100);
//     parts++;
//     //   retrun position;
// }, velocity);