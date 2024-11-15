// #1 Hälsa användaren
let namn = prompt("Vad heter du?");
console.log(namn);

if (namn) {
  alert("Välkommen, " + namn + "!");
} else {
  alert("Välkommen!");
}

// #2 Jämför två ord
let ord1 = prompt("Mata in ett ord:");
let ord2 = prompt("Mata in ett andra ord:");

if (ord1 < ord2) {
  alert("Det första ordet, '" + ord1 + "', kommer först i alfabetet.");
} else if (ord1 > ord2) {
  alert("Det andra ordet, '" + ord2 + "', kommer först i alfabetet.");
} else {
  alert("Båda orden är lika i alfabetisk ordning.");
}

// #3 Är användaren vuxen?
let age = prompt("Hur gammal är du?");

if (age !== null && !isNaN(age)) {
  age = parseInt(age);

  if (age >= 18) {
    alert("Du är över 18 år.");
  } else {
    alert("Du är under 18 år.");
  }
} else {
  alert("Var god skriv in en giltig ålder.");
}

// #4 Gissa ett djur
let korrektDjur = "korp";

let gissning = prompt("Vilket djur tänker jag på?");

if (gissning !== null && gissning.toLowerCase() === korrektDjur) {
  alert("Du gissade rätt! Jag tänkte på en " + korrektDjur + ".");
} else {
  alert("Tyvärr, du gissade fel. Jag tänkte på en " + korrektDjur + ".");
}

// #5 Känn igen en färg
let favoritFarg = prompt("What's your favourite color? (röd, blå eller grön)?");

if (favoritFarg !== null) {
  favoritFarg = favoritFarg.toLowerCase();

  if (favoritFarg === "röd") {
    alert("Röd är en passionerad och energisk färg!");
  } else if (favoritFarg === "blå") {
    alert("Blå är en lugn och avkopplande färg!");
  } else if (favoritFarg === "grön") {
    alert("Grön är en färg som står för natur och harmoni!");
  } else {
    alert("Du valde en annan färg. Prova välja mellan röd, blå och grön.");
  }
} else {
  alert("Du skrev inget. Försök igen!");
}

// #6 Godkänd eller inte
