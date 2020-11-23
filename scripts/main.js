function jouer(cellule) {
    createCircle(cellule);
}


}
let playerTurn = "player1"



if (playerTurn === "player1") {​​

      function createCross(cellule) {
          let newCross = document.createElement('span');
          newCross.setAttribute("class", "cross");
          document.getElementById(cellule).appendChild(newCross);
}​​ else {​​

  function createCircle(cellule) {
      let newCircle = document.createElement('span');
      newCircle.setAttribute("class", "circle");
      document.getElementById(cellule).appendChild(newCircle);
  
}​​



playerTurn  = playerTurn == "player1" ? "player2" : "player1"
