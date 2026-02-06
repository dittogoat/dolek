// #region Szablony widoków EJS w Node.js
/* informacje ogólne
 * EJS (Embedded JavaScript Templating) to silnik szablonów dla Node.js, który umożliwia generowanie dynamicznych stron HTML poprzez osadzanie kodu JavaScript w plikach szablonów.
 * Pozwala na tworzenie szablonów z dynamiczną zawartością, co ułatwia zarządzanie widokami w aplikacjach webowych.
 * EJS jest prosty w użyciu i integracji z frameworkami takimi jak Express.js.
 */

/* Zalety EJS
 * Prosta składnia: EJS używa prostych znaczników do osadzania kodu JavaScript w HTML.
 * Dynamiczne generowanie treści: Umożliwia tworzenie stron z dynamiczną zawartością na podstawie danych przekazywanych do szablonów.
 * Łatwa integracja z Express.js: EJS jest często używany jako domyślny silnik szablonów w aplikacjach Express.
 * Obsługa częściowych widoków: Umożliwia tworzenie i ponowne używanie częściowych widoków (partials) w różnych miejscach aplikacji.
 * Wsparcie dla logiki warunkowej i pętli: Pozwala na implementację logiki warunkowej i iteracji bezpośrednio w szablonach.
 */

/* Wady EJS
 * Ograniczona funkcjonalność w porównaniu do bardziej zaawansowanych silników szablonów, takich jak Handlebars czy Pug.
 * Może prowadzić do mieszania logiki biznesowej z warstwą prezentacji, jeśli nie jest używany ostrożnie.
 * Brak wbudowanych mechanizmów do ochrony przed atakami XSS, co wymaga dodatkowej uwagi przy renderowaniu danych użytkownika.
 */

/* Podsumowanie
 * EJS to popularny i prosty w użyciu silnik szablonów dla Node.js, który umożliwia tworzenie dynamicznych stron HTML.
 * Jego zalety obejmują prostą składnię, łatwą integrację z Express.js oraz obsługę częściowych widoków.
 * Jednakże, EJS ma pewne ograniczenia w porównaniu do bardziej zaawansowanych silników szablonów i wymaga ostrożności przy zarządzaniu logiką biznesową i ochroną przed atakami XSS.
 */

/* Najważniejsze elementy EJS
<%- - zinterpretuj HTML|EJS i wyświetl np:
	<%- include('head') %>
	<%- content %>

<%= - wyświetl bez interpretacji np:
	<h1><%= tytulStrony %></h1>

<% klasy.forEach(klasa => { %>
	<li><%= klasa.nazwa %></li>
}) %>

<% if (warunek) { %>
	// jakis kod
<% } else { %>
	// jakis kod
} %>
*/

/* użycie EJS z Express.js
1	zainstaluj EJS: npm install ejs
2	w pliku aplikacji (np. app.js) ustaw EJS jako silnik widoków:
	app.set('view engine', 'ejs');
3	stwórz folder 'views' w katalogu głównym aplikacji i umieść tam pliki szablonów EJS (np. index.ejs)
4	w trasach aplikacji renderuj widoki za pomocą res.render():
	app.get('/', (req, res) => {
		res.render('index', { tytulStrony: 'Moja Strona' });
	});
*/

/* res.render() - metoda Express.js do renderowania widoków
 * res.render() generuje HTML na podstawie szablonu EJS i przekazanych danych, a następnie wysyła go jako odpowiedź do klienta.
 * res.render() automatycznie łączy dane z szablonem, umożliwiając dynamiczne generowanie treści stron.
 *
 * res.render(nazwaWidoku, daneDlaWidoku)
 * - nazwaWidoku - nazwa pliku szablonu EJS bez rozszerzenia (np. 'index' dla 'index.ejs')
 * - daneDlaWidoku - obiekt zawierający dane, które mają być przekazane do szablonu i użyte podczas renderowania
 * Przykład:
	app.get('/', (req, res) => {
		const dane = { tytulStrony: 'Witaj na mojej stronie', uzytkownik: { imie: 'Jan', nazwisko: 'Kowalski' } };
		res.render('index', dane);
	});
 *
 * res.render() obsługuje również błędy podczas renderowania i może przyjmować funkcję zwrotną jako trzeci argument do obsługi tych błędów.
 * Przykład z funkcją zwrotną:
	app.get('/', (req, res) => {
		const dane = { tytulStrony: 'Witaj na mojej stronie' };
		res.render('index', dane, (error, html) => {
			if (error) {
				console.error('Błąd renderowania widoku:', error);
				res.status(500).send('Wewnętrzny błąd serwera');
			} else {
				// tutaj można użyć dodatkowy szablon lub modyfikować wygenerowany HTML, a dopiero później wysłać go do klienta
				res.send(html);
			}
		});
	});
 *
 * W szablonie EJS można uzyskać dostęp do przekazanych danych za pomocą ich nazw (np. <%= tytulStrony %>, <%= uzytkownik.imie %>)
 */

// #region Importowanie innych szablonów EJS
/* Wewnątrz jednego widoku EJS można używać innych widoków (częściowych) za pomocą dyrektywy include.
 * Przykład użycia include w widoku EJS:
	<%- include('header') %> <!-- załaduj nagłówek z pliku header.ejs -->
	<h1>Witaj na mojej stronie</h1>
	<%- include('footer') %> <!-- załaduj stopkę z pliku footer.ejs -->
 *
 * W powyższym przykładzie 'header' i 'footer' to nazwy plików szablonów EJS (bez rozszerzenia .ejs), które zostaną dołączone do głównego widoku.
 * Dyrektywa include pozwala na modularne tworzenie widoków, co ułatwia zarządzanie kodem i ponowne używanie części widoków w różnych miejscach aplikacji.
 */
// #endregion

// #region Przykłady użycia
// #region Przykład 1: Podstawowa konfiguracja EJS z Express.js
import express from 'express';
// npm install ejs

const PORT = 3000;
const app = express();

app
	.set('views', './') // określenie miejsca z którego mają być brane szablony
	.set('view engine', 'ejs') // włączenie silnika EJS

generujLayout = (nazwaLayoutu, resource, daneDlaLayoutu) => {
	console.log('	[generujLayout]	layout:', nazwaLayoutu); // nazwaLayoutu np lekcje/listaLekcji
	resource.render(nazwaLayoutu, daneDlaLayoutu, (error, content) => {
		if (error) {
			console.log('	[generujLayout]	błąd renderowania "' + nazwaLayoutu + '":', error);
			throw error;
		}

		resource.write(content);
		resource.end();
	});
}
// #endregion

// #region Przykład 1: Renderowanie widoku z danymi użytkownika
app.get('/uzytkownik', (req, res) => {
	const uzytkownik = {
		imie: 'Jan',
		nazwisko: 'Kowalski',
		login: 'jkowalski',
		miasto: 'Warszawa'
	};

	generujLayout('uzytkownik', res, { uzytkownik });
});

/* szablon uzytkownik.ejs powinien wyglądać tak:
<!DOCTYPE html>
<html lang="pl">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Dane użytkownika</title>
</head>
<body>
	<h1>Dane użytkownika</h1>
	<ul>
		<li>Imię: <%= uzytkownik.imie %></li>
		<li>Nazwisko: <%= uzytkownik.nazwisko %></li>
		<li>Login: <%= uzytkownik.login %></li>
		<li>Miasto: <%= uzytkownik.miasto %></li>
	</ul>
</body>
</html>
*/
// #endregion
// #endregion

// #region Zadania praktyczne
/* Zadanie praktyczne 1: Wyświetlanie listy przedmiotów
1. Stwórz trasę /przedmioty, która renderuje widok z listą przedmiotów szkolnych.
2. Utwórz tablicę z nazwami przedmiotów (np. Matematyka, Fizyka, Chemia, Historia).
3. Przekaż tę tablicę do szablonu EJS i wyświetl ją jako listę punktowaną (<ul><li>...</li></ul>).
 */

/* Zadanie praktyczne 2: Strona powitalna z dynamicznym tytułem
1. Stwórz trasę /powitanie, która renderuje widok powitalny.
2. Przekaż do szablonu EJS zmienną z tytułem strony (np. "Witamy na naszej stronie!").
3. Wyświetl ten tytuł w nagłówku <h1> na stronie.
 */

/* Zadanie praktyczne 3: Formularz kontaktowy
1. Stwórz trasę /kontakt, która renderuje widok z formularzem kontaktowym.
2. Formularz powinien zawierać pola: imię, nazwisko, email i wiadomość.
3. Po przesłaniu formularza (metoda POST), wyświetl podziękowanie z imieniem użytkownika.
*/

/* Zadanie praktyczne 4: Strona z warunkowym wyświetlaniem treści
1. Stwórz trasę /status, która renderuje widok z informacją o statusie użytkownika.
2. Przekaż do szablonu EJS zmienną isLoggedIn (true/false).
3. W szablonie wyświetl różne treści w zależności od wartości isLoggedIn:
   - Jeśli true, wyświetl "Witaj ponownie, użytkowniku!".
   - Jeśli false, wyświetl "Proszę się zalogować.".
*/

/* Zadanie praktyczne 5: Strona z pętlą wyświetlającą produkty
1. Stwórz trasę /produkty, która renderuje widok z listą produktów.
2. Utwórz tablicę obiektów produktów, gdzie każdy produkt ma nazwę i cenę.
3. Przekaż tę tablicę do szablonu EJS i wyświetl ją jako tabelę HTML z kolumnami "Nazwa produktu" i "Cena".
*/

/* Zadanie praktyczne 6: Strona z częściowymi widokami (partials)
1. Stwórz trasę /strona, która renderuje widok główny.
2. Utwórz częściowe widoki (partials) dla nagłówka (header.ejs) i stopki (footer.ejs).
3. W widoku głównym załaduj te częściowe widoki za pomocą <%- include('header') %> i <%- include('footer') %>.
*/

/* Zadanie praktyczne 7: Strona z formularzem rejestracyjnym i walidacją
1. Stwórz trasę /rejestracja, która renderuje widok z formularzem rejestracyjnym.
2. Formularz powinien zawierać pola: nazwa użytkownika, hasło i potwierdzenie hasła.
3. Po przesłaniu formularza (metoda POST), sprawdź, czy hasło i potwierdzenie hasła są takie same.
4. Jeśli tak, wyświetl komunikat "Rejestracja udana!".
5. Jeśli nie, wyświetl komunikat "Hasła nie są zgodne, spróbuj ponownie.".
*/

/* Zadanie praktyczne 8: Strona z dynamicznym menu nawigacyjnym
1. Stwórz trasę /menu, która renderuje widok z menu nawigacyjnym.
2. Utwórz tablicę obiektów reprezentujących pozycje menu, gdzie każda pozycja ma nazwę i link.
3. Przekaż tę tablicę do szablonu EJS i wyświetl ją jako listę linków (<ul><li><a href="...">...</a></li></ul>).
*/

/* Zadanie praktyczne 9: Strona z obsługą błędów
1. Stwórz trasę /blad, która renderuje widok z informacją o błędzie.
2. Przekaż do szablonu EJS zmienną errorMessage z opisem błędu.
3. Wyświetl ten komunikat na stronie w widocznym miejscu.
*/

/* Zadanie praktyczne 10: Strona z wielojęzycznym powitaniem
1. Stwórz trasę /powitanie/:jezyk, gdzie :jezyk to parametr określający język (np. pl, en, de).
2. W zależności od wartości parametru, przekaż do szablonu EJS odpowiedni komunikat powitalny:
   - pl: "Witamy na naszej stronie!"
   - en: "Welcome to our website!"
   - de: "Willkommen auf unserer Webseite!"
3. Wyświetl ten komunikat w nagłówku <h1> na stronie.
*/
// #endregion
