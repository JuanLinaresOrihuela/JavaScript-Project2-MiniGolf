const playerName = prompt("Welcome to GC mini golf! What is your name?");

if (playerName) {
  const holesToPlay = prompt(`Hi, ${playerName}! Would you like to play 3 or 6 holes?`);
  
  if (holesToPlay === "3" || holesToPlay === "6") {
    let totalPutts = 0;

    for (let i = 1; i <= parseInt(holesToPlay); i++) {
      const par = 3; 
      
      const holePutts = parseInt(prompt(`How many putts for hole ${i}? (par: ${par})`));
      
      
      if (!isNaN(holePutts)) {
        totalPutts += holePutts;
      } else {
        alert("Please enter a valid number of putts.");
        i--; 
      }
    }

    const coursePar = holesToPlay * 3;
    
    const golferPar = totalPutts - coursePar;
    
    if (golferPar > 0) {
      console.log(`Nice try, ${playerName}... Your total par was: +${golferPar}.`);
    } else if (golferPar < 0) {
      console.log(`Great job, ${playerName}! Your total par was: -${Math.abs(golferPar)}.`);
    } else {
      console.log(`Good game, ${playerName}. Your total par was: 0.`);
    }
  } else {
    alert("Please enter either 3 or 6 for the number of holes to play.");
  }
} else {
  alert("Please enter your name.");
}
