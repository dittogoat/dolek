import express from 'express';
import session from 'express-session';
import flash from 'connect-flash';
// npm install express express-session connect-flash

const PORT = 3000;
const app = express();

app.use(session({
	secret: 'T@jny-Kluc2-D0-52yfr0w@n!@-M!n-32-2n@k!-N@jlep!ej-Wygener0w@ny-L050w0',
	resave: false, // zapisywac sesję przy każdym żądaniu, nawet bez zmian? Zwykle false
	saveUninitialized: true, // zapisywać nową sesję, zanim zostanie zmodyfikowana? Zwykle true
	cookie: {
		maxAge: 1000 * 60 * 30,
		cacheControl: 'no-store, no-cache, must-revalidate, private',
		pragma: 'no-cache',
		expires: 0,
	}
}))
app.use(flash());
app.use(express.urlencoded({ extended: true }));

/* Przykładowe użycie sesji i flash messages */
app.get('/', (req, res) => {
	req.session.username = 'JanKowalski';	//	Ustawienie wartości w sesji
	req.flash('info', 'Witamy na stronie głównej!');	//	Ustawienie wiadomości flash
	res.send('Strona główna. Przejdź do /dashboard, aby zobaczyć sesję i wiadomości flash.');
});

app.get('/dashboard', (req, res) => {
	const username = req.session.username || 'Gość';	//	Pobranie wartości z sesji
	const messages = req.flash('info');	//	Pobranie wiadomości flash
	res.send(`Witaj, ${username}!<br>Wiadomości: ${messages.join('<br>')}`);
});

app.listen(PORT, () => {
	console.log(`Serwer działa na porcie ${PORT}`);
});
// Teraz serwer Express obsługuje sesje i wiadomości flash. Przykładowe trasy pokazują, jak ustawiać i pobierać dane z sesji oraz jak korzystać z flash messages.

/* usuwanie sesji
req.session.destroy(err => {
    if (err) {
        return console.log(err);
    }

	res.redirect('/'); // przekierowanie na inną stronę
});
/**/

/* Zadanie 1:
1. Uruchom powyższy kod serwera Express.
2. Otwórz przeglądarkę i przejdź do http://localhost:3000/.
3. Następnie przejdź do http://localhost:3000/dashboard, aby zobaczyć ustawioną wartość sesji i wiadomości flash.
4. Zmodyfikuj kod, aby dodać więcej informacji do sesji i wyświetlić je na stronie dashboard.
*/

/* Zadanie 2:
1. Dodaj trasę /logout, która usuwa dane sesji i przekierowuje użytkownika z powrotem na stronę główną z wiadomością flash informującą o wylogowaniu.
2. Przetestuj działanie trasy /logout.
*/

/* Zadanie 3:
1. Dodaj formularz logowania na stronie głównej, który pozwala użytkownikowi wprowadzić nazwę użytkownika.
2. Po przesłaniu formularza, zapisz nazwę użytkownika w sesji i przekieruj użytkownika do dashboard.
3. Wyświetl nazwę użytkownika na stronie dashboard.
*/

/* Zadanie 4:
1. Dodaj mechanizm ograniczający dostęp do strony dashboard tylko dla zalogowanych użytkowników (tych, którzy mają ustawioną nazwę użytkownika w sesji).
2. Jeśli niezalogowany użytkownik spróbuje uzyskać dostęp do dashboard, przekieruj go na stronę główną z odpowiednią wiadomością flash.
*/

/* Zadanie 5:
1. Zaimplementuj funkcję odświeżania sesji, która resetuje czas wygaśnięcia sesji przy każdym żądaniu użytkownika.
2. Przetestuj, czy sesja wygasa po określonym czasie nieaktywności.
*/
