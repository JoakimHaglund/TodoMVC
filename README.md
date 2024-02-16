# TodoMVC

Detta projekt är vår implementation av den kända exempelappen TodoMVC, skriven med HTML, CSS och JavaScript. TodoMVC är ett öppen källkodsprojekt som syftar till att ge exempel på hur man kan implementera en enkel todo-applikation med olika ramverk och tekniker.

## Funktionalitet
Vår TodoMVC-applikation har följande funktionalitet:

* Lägga till nya anteckningar.
* Ta bort enskilda anteckningar.
* Markera anteckningar som färdiga.
* Visa antalet återstående anteckningar ("X items left").
* Markera alla anteckningar som färdiga/ofärdiga.
* Ta bort alla färdiga anteckningar.
* Visa upp antingen alla anteckningar ("All"), alla ofärdiga anteckningar ("Active") eller alla färdiga anteckningar ("Completed").

## Utseende
Vi har strävat efter att återskapa utseendet och designen i TodoMVC-exemplet. Vi har använt CSS för att ge applikationen en ren och modern design, inklusive emojis för olika knappar och funktioner.

## Tester
Vi har skrivit tre GUI-tester med Playwright för att säkerställa att vår applikation fungerar korrekt:

1. Lägg till en anteckning och bekräfta att den visas på sidan.
2. Lägg till en anteckning och bekräfta att sidan visar "1 item left". Kryssa sedan i anteckningen och bekräfta att sidan visar "0 items left".
3. Lägg till 3 anteckningar, kryssa i en av dem och bekräfta att sidan visar "2 items left".

## Installation och körning
1. Klona projektet till din lokala maskin:
   
   >git clone [https://github.com/din-användare/todo-mvc.git](https://github.com/JoakimHaglund/TodoMVC)
   
2. Hosta webbsidan genom exempelvis VScode live server eller xampp.

## Utvecklare
Denna TodoMVC-applikation skapades av Andreas Siggelin och Joakim Haglund Malm.
