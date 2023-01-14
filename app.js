const addSquare = (size) => {
    let board = document.querySelector(".board");
    let squares = document.querySelectorAll("div");

    squares.forEach((div) => div.remove());

    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for( i=0; i<(size*size); i++){
        let square = document.createElement('div');
        square.style.backgroundColor = "lightgrey";
        square.style.borderRight = "0.05em solid black";
        square.style.borderBottom = "0.05em solid black";
        square.addEventListener('mouseover', ()=> square.style.backgroundColor = "black")

        board.insertAdjacentElement('beforeend', square);
    }
}

// const addSquares = (size) => {
//     let board = document.querySelector(".board");
//     let squares = document.querySelectorAll("div");

//     squares.forEach((div) => div.remove());
//     board.style.gridTemplateColumns = `repeat(${size}. 1fr)`;
//     board.style.gridTemplateRows = `repeat(${size}. 1fr)`;


//     for(i=0; i<(size*size); i++){
//         let square = document.createElement('div');
//         square.style.backgroundColor = "white";
//         square.style.borderRight = "thin solid darkgrey";
//         square.style.borderBottom = "thin solid darkgrey";

//         square.addEventListener("mouseover", colorSquare);
//         board.insertAdjacentElement('beforeend', square); 
//     }
// }

addSquare(16);


const changeSize = (input) => {
    if(input<2) return alert("need higher number");
    if(input>100) return alert("need lower number");

    addSquare(input);
}