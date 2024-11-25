// Ein Beispiel-Array
const numbers = [1, 2, 3, 4, 5];

// Verwendung der for...of-Schleife (das gleiche wie foreach in C#)
for (const number of numbers) {
    console.log(number);
}

const day = 3; // Beispiel: 3 entspricht Mittwoch

switch (day) {
    case 1:
        console.log("Montag");
        break;
    case 2:
        console.log("Dienstag");
        break;
    case 3:
        console.log("Mittwoch");
        break;
    case 4:
        console.log("Donnerstag");
        break;
    case 5:
        console.log("Freitag");
        break;
    case 6:
        console.log("Samstag");
        break;
    case 7:
        console.log("Sonntag");
        break;
    default:
        console.log("Ungültiger Tag");
}

function divideNumbers(a, b) {
    try {
        // Versuch, die Division durchzuführen
        if (b === 0) {
            throw new Error("Division durch Null ist nicht erlaubt!"); // Wirf einen Fehler
        }
        const result = a / b; // Hier erfolgt die Division
        console.log(`Ergebnis: ${result}`);
    } catch (error) {
        // Fange den Fehler und gebe eine Nachricht aus
        console.log(`Fehler: ${error.message}`);
    } finally {
        // Code, der immer ausgeführt wird, egal ob ein Fehler aufgetreten ist oder nicht
        console.log("Berechnung abgeschlossen.");
    }
}

// Beispielaufrufe
divideNumbers(10, 2); // Erfolgreiche Division
divideNumbers(10, 0); // Fehlerfall
