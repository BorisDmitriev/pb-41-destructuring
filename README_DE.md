* Arbeite mit der Datei `index.js`, die in diesem Repository bereitgestellt wird.

# Destructuring

**Anweisungen**
- Arbeiten Sie in der mitgelieferten Datei `index.js`
#### 1. Array Destrukturierung
* Deklarieren Sie die Variablen `fruit`, `vegetable` und `food`.
* Weisen Sie den Variablen jeweils die folgenden Werte aus einem Array zu, indem Sie eine Umstrukturierungszuweisung verwenden: `["banana", "cucumber", "bread", "cakes", "pizza"]`
* Weisen Sie "bread", "cakes" und "pizza" mit Hilfe der Rest-Eigenschaft der Destrukturierungszuweisung `food` zu.

#### 2. Objekt-Destrukturierung
* Deklarieren Sie die Variablen `fran`, `martina` und `camille`.
* Weisen Sie den Variablen mit Hilfe der Destrukturierungszuweisung jeweils die folgenden Werte aus einem Objekt zu:
```javascript
{
  fran: "monster",
  martina: "ghost",
  camille: "witch"
}
```

#### 3. Parameter: Objekt Destrukturierung 
* Erstellen Sie ein Objekt namens `musician` mit Band-/Musikerdetails, z.B. Name der Band/des Musikers, größter Hit, Nationalität, Genre usw. 
* Erstellen Sie dann eine Funktion namens `displayMusicianDetails`, die alle Informationen über die Band/den Musiker als String zurückgibt. 
* Das übergebene Objekt sollte in die Parameter der Funktion destrukturiert werden.
* Beispiel
```javascript
displayMusicianDetails(musician) → "Regina Spektor ist eine amerikanisch-russische Singer/Songwriterin. Die Musikerin singt Indie-Pop und ihr größter Hit ist 'Us'".
```

[//]: # (autograding info start)
## Ergebnisse
  [![Ergebnis-Badge](../../blob/badges/.github/badges/autograding/badge.svg)](https://github.com/DigitalCareerInstitute/PB-datastructure-destructuring/actions)
  
  [Ergebnisdetails](https://github.com/DigitalCareerInstitute/PB-datastructure-destructuring/actions)
  
  ### Debugging deines Codes
  > [Lesen der Testausgaben](https://github.com/DCI-EdTech/autograding-setup/wiki/Reading-test-outputs)
  
  Es gibt zwei Möglichkeiten, um herauszufinden, warum Aufgaben nicht abgeschlossen werden können:
  #### 1. Tests lokal ausführen
  - Führe `npm install` aus
  - Führe `npm test` im Terminal aus. Du wirst sehen, wo deine Lösung vom erwarteten Ergebnis abweicht.
  
  #### 2. Überprüfen der Testausgabe auf GitHub
  - Gehe auf die [Registerkarte Aktionen deines Übungsrepos](https://github.com/DigitalCareerInstitute/PB-datastructure-destructuring/actions)
  - Dort siehst du eine Liste mit den Testläufen. Klicke auf den obersten.
  - Klicke auf 'Autograding'.
  - Erweitere den Punkt 'Run DCI-EdTech/autograding-action@main'
  - Hier siehst du alle Ausgaben des Testlaufs

[//]: # (autograding info end)
