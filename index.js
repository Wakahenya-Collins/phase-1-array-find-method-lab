// // code your solution here
// const record = [
//     
//     //...
// ]  // { year: 1997, result: "W" },
        // { year: 2002, result: "L" },
        // { year: 2005, result: "L" },
        // { year: 2007, result: "W" },
        // { year: 2010, result: "L" },

        function superbowlWin(records) {
          const winningGame = records.find((game) => game.result === "W");
        
          if (winningGame) {
            return winningGame.year;
          } else {
            return undefined;
          }
        }
        
      