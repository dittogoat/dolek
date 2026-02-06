// #region informacje
// #region pliki statyczne w Express.js
/* Pliki statyczne to zasoby (obrazy, style CSS, skrypty JavaScript, ikony favicon.ico, ...), które są bezpośrednio serwowane klientowi bez żadnej dodatkowej logiki po stronie serwera.
W Express.js możemy łatwo obsługiwać pliki statyczne za pomocą wbudowanego middleware 'express.static'.

Jeśli ustawimy katalog statyczny, np. 'public', to wszystkie pliki w tym katalogu będą dostępne bezpośrednio przez przeglądarkę np. plik 'style.css' będzie dostępny pod adresem http://localhost:3000/style.css
*/
// #endregion

// #region konfiguracja
// istniejący katalog:
app.use(express.static('nazwa_katalogu')); // 'nazwa_katalogu' to katalog, w którym znajdują się pliki statyczne - najczęściej 'public' lub 'static'

// katalog wirtualny:
app.use('/sciezka_wirtualna', express.static('nazwa_katalogu'));
// #endregion
// #endregion

// #region Zadania
/* Zadanie praktyczne 1:
Stwórz prostą aplikację Express, która serwuje pliki statyczne z katalogu 'public'. Dodaj do katalogu 'public' plik HTML, plik CSS i obrazek. Upewnij się, że wszystkie zasoby są poprawnie ładowane w przeglądarce.
*/

/* Zadanie praktyczne 2:
Zmodyfikuj aplikację tak, aby pliki statyczne były dostępne pod wirtualną ścieżką '/assets'. Sprawdź, czy pliki są dostępne pod nową ścieżką.
*/

/* Zadanie praktyczne 3:
Dodaj do aplikacji obsługę favicon.ico. Umieść plik favicon.ico w katalogu 'public' i upewnij się, że jest on poprawnie serwowany przez Express.
*/

/* Zadanie praktyczne 4:
Stwórz middleware, które loguje każdą prośbę o plik statyczny (np. metodę HTTP i ścieżkę żądania) do konsoli.
*/

/* Zadanie praktyczne 5:
Zaimplementuj mechanizm cache'owania plików statycznych, ustawiając odpowiednie nagłówki HTTP (np. Cache-Control) dla plików serwowanych z katalogu statycznego.
*/
// #endregion
