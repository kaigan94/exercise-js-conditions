// #1 Hälsa användaren
let namn = prompt("Vad heter du?");
console.log(namn);

if (namn) {
  alert("Var hälsad, " + namn + "!");
} else {
  alert("Var hälsad!");
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
let favoritFarg = prompt(
  "Vilken av dessa färger är din favoritfärg (röd, blå eller grön)?"
);

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
let provresultat = prompt("Vad fick du för provresultat?");

if (provresultat !== null && !isNaN(provresultat)) {
  provresultat = parseInt(provresultat);

  if (provresultat >= 50) {
    alert("Grattis, du är godkänd!");
  } else {
    alert("Tyvärr, du är inte godkänd.");
  }
} else {
  alert("Var god skriv in ett tal mellan 50 och 100.");
}

// #7 Vad ska vi göra idag?
let väder = prompt("Hur är vädret idag? (soligt, regnigt eller molnigt?");

if (väder !== null) {
  väder = väder.toLowerCase();

  if (väder === "soligt") {
    alert(
      "Det är soligt! Perfekt för en promenad eller en fika utomhus! Glöm inte SPF!"
    );
  } else if (väder === "regnigt") {
    alert(
      "Det är regnigt. Perfekt för att spela tv-spel eller titta film inomhus!"
    );
  } else if (väder === "molnigt") {
    alert(
      "Det är molnigt. Du kan ta en promenad eller göra någon aktivitet inom, eller utomhus!"
    );
  } else {
    alert(
      "Det verkar som du skrev något annat än soligt, regnigt eller molnigt. Prova igen!"
    );
  }
} else {
  alert("Du avbröt eller skrev inget. Försök igen!");
}

// #8 Vilket språk talar du?
let language = prompt(
  "Vilket språk talar du? (Skriv svenska, engelska, eller ett annat språk)"
);

if (language.toLowerCase() === "svenska") {
  alert("Hej! Hur mår du? Du förstår säkert denna meningen!");
} else if (language.toLowerCase() === "engelska") {
  alert("Hello! How are you? You probably understand this sentence!");
} else {
  alert("Hello! I don't understand your language, but nice to meet you!");
}

// #9 Multipel av 5?
let number = parseInt(prompt("Skriv ett tal:"));

if (number % 5 === 0) {
  alert("Talet " + " är en multibel av 5.");
} else {
  alert("Talet " + number + " är inte en multibel av 5.");
}

// #10 Ska vi gå ut?
let wantToGoOut = confirm("Vill du gå ut?");
if (wantToGoOut) {
  alert("Härligt! Längtar!");
} else {
  alert("Okej, synd. En annan gång!");
}

// #11 Siffra eller bokstav
let tecken = prompt("Skriv ett tecken:");

if (tecken.length === 1) {
  if (tecken >= "0" && tecken <= "9") {
    alert(tecken + " är en siffra.");
  } else if (tecken.toLowerCase() >= "a" && tecken.toLowerCase() <= "z") {
    alert(tecken + " är en bokstav.");
  } else {
    alert(tecken + " är varken en bokstav eller ett en siffra.");
  }
} else {
  alert("Vänligen skriv bara ett tecken.");
}

// #12 Största av 3 ord
let word1 = prompt("Skriv ett ord (bara ett):");
let word2 = prompt("Skriv ett andra ord (bara ett):");
let word3 = prompt("Skriv ett tredje ord (bara ett):");

let longestWord = word1;

if (word2.length > longestWord.length) {
  longestWord = word2;
}

if (word3.length > longestWord.length) {
  longestWord = word3;
}

alert("Det längsta ordet är: " + longestWord);

// #13 Lösenordskontroll
let password = prompt(
  "Låt oss se om ditt lösenord är tillräckligt långt. Skriv ditt lösenord:"
);

function containsNumber(password) {
  return /\d/.test(password); // Kollar om det finns minst en siffra med: /\d/
}

if (!password) {
  alert("Du angav inget lösenord. Försök igen.");
} else {
  if (password.length >= 8 && containsNumber(password)) {
    alert("Lösenordet är tillräckligt säkert!");
  } else {
    if (password.length < 8) {
      alert("Lösenordet är för kort. Det måste innehålla minst 8 tecken.");
    }
    if (!containsNumber(password)) {
      alert("Lösenordet måste innehålla minst en siffra.");
    }
  }
}

// #14 Ålderskategori
let ageInput = prompt("Hur gammal är du?");

if (!ageInput) {
  alert("Du angav ingen ålder. Försök igen.");
} else {
  let age2 = parseInt(ageInput, 10);

  if (isNaN(age2) || age2 < 0) {
    alert("Vänligen ange en giltig ålder med ett positivt tal.");
  } else {
    if (age2 <= 12) {
      alert("Du är ett barn.");
    } else if (age2 <= 19) {
      alert("Du är en tonåring.");
    } else if (age2 <= 64) {
      alert("Du är en vuxen.");
    } else {
      alert("Du är en pensionär.");
    }
  }
}

// #15 Beslutstagande
let firstChoice = confirm("Vill du gå på bio?");
if (firstChoice) {
  alert("Nice! Det ska bli kul!");
} else {
  alert("Okej, kanske en annan gång.");
}

let secondChoice = confirm("Vill du gå ut och äta något?");
if (secondChoice) {
  alert("Perfekt! Nu ska vi bara hitta ett ställe.");
} else {
  alert("Inga problem, vi kan laga mat hemma.");
}
