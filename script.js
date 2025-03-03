'use strict'

// ZIEL
// Wenn ich den 'Next'-Button drücke:
//     soll der nächste Step blau umrahmt werden und progress
//     bis zum nächsten step dessen background-color in blau
//     ändern
//     zudem soll dies in einem Übergang passieren
// vom Übergang vom ersten schritt zum zweiten:
//     'Prev'-Button von deaktiviert zu aktiviert
// wenn der letzte Step erreicht ist:
//     'Next'-Button deaktivieren
//     alle Steps und ganzer progress blau umgeändert sein

// Wenn ich den 'Prev'-Button drücke:
//     soll der aktuell blau umrahmte Step seine blaue border
//     in grau wechseln und progress bis zum vorherigen step
//     davor auch
//     zudem soll dies in deinem Übergang passieren
// Vom Übergang vom vierten Step zum dritten:
//     'Next'-Button von deaktivieren zu aktiviert
// wenn der erste Step erreicht ist:
//     'Prev'-Button deaktivieren
//     alle steps, bis auf den ersten, und progress sollen in
//     grau umgeändert sein



// EINGABE
let currentStep = 0

let progressLine = document.querySelector('.progress')
let steps = document.querySelectorAll('.step')
let btns = document.querySelectorAll('.buttons')
let prevBtn = document.querySelector('#prev')
let nextBtn = document.querySelector('#next')



// VERARBEITUNG

// Funktion updateProgress
// updaten des progresslines
// hinzufügen oder entfernen der Klasse active
function updateProgress() {
    const percent = (currentStep / (steps.length -1)) * 100;
    progressLine.style.width = percent + '%';

    steps.forEach(step => {
        if (currentStep > 0) {
            prevBtn.removeAttribute('disabled');
        }
        else {
            prevBtn.setAttribute('disabled', true);
        }

        if (currentStep === 3) {
            nextBtn.setAttribute('disabled', true);
        }
        else {
            nextBtn.removeAttribute('disabled');
        }
    });
}


// funktion nextStep
// wenn nächster Step Klasse active nicht hat
//      Klasse active hinzufügen
// wenn line zwischen den active-steps Klasse active nicht hat
//      Klasse active hinzufügen
// wenn Step2 active
//      dann soll prevBtn von disabled zu abled wechseln
// wenn Step4 active
//      dann soll nextBtn von abled zu disabled wechseln
function nextStep() {
    if (currentStep < steps.length -1) {
        currentStep++;
        steps[currentStep].classList.add('active');
        updateProgress();
    }
}

// Funktion prevStep
// wenn aktueller Step Klasse active hat
//      dann Klasse active entfernen
// wenn line davor Klasse active hat
//      dann line Klasse active entfernen
// wenn Step4 Klasse active entfernt bekommt
//      dann soll nextBtn von disabled zu abled wechseln
// wenn Step2 Klasse active entfernt bekommt
//      dann soll prevBtn von abled zu disabled wechseln
function prevStep() {
    if (currentStep > 0) {
        steps[currentStep].classList.remove('active');
        currentStep--;
        updateProgress();
    }
}


// wenn ich auf nextBtn drücke
//      dann soll Funktion goToNextStep ausgeführt werden
nextBtn.addEventListener('click', nextStep)

// wenn ich auf prevBtn drücke
//  dann soll Funktion backToPrevStep ausgeführt werden
prevBtn.addEventListener('click', prevStep)