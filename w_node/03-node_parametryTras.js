// #region Parametry tras w Express.js
/* Parametry tras pozwalają na definiowanie dynamicznych segmentów w ścieżkach URL.
 * Są one użyteczne, gdy chcemy obsługiwać różne zasoby na podstawie wartości przekazanych w URL.
 *
 * Przykład:
 * Definiujemy trasę z parametrem ":id", który może reprezentować identyfikator użytkownika.
 */

// #region Definicja trasy z parametrem "id"
app.get('/user/:id', (req, res) => {
  // Pobieranie wartości parametru "id" z obiektu req.params
  const userId = req.params.id;
  res.send(`Profil użytkownika o ID: ${userId}`);
});
/* W powyższym przykładzie, gdy użytkownik odwiedzi URL "/user/123",
 * aplikacja zwróci "Profil użytkownika o ID: 123".
 *
 * Możemy definiować wiele parametrów w jednej trasie:
 */
// #endregion

// #region Definicja trasy z wieloma parametrami
app.get('/order/:orderId/item/:itemId', (req, res) => {
  const orderId = req.params.orderId;
  const itemId = req.params.itemId;
  res.send(`Zamówienie ID: ${orderId}, Pozycja ID: ${itemId}`);
});
/* W tym przypadku, odwiedzając URL "/order/456/item/789",
 * aplikacja zwróci "Zamówienie ID: 456, Pozycja ID: 789".
 *
 * Parametry tras są dostępne w obiekcie req.params jako właściwości,
 * gdzie klucze odpowiadają nazwom zdefiniowanym w trasie.
 */
// #endregion

// #region Obsługa parametrów opcjonalnych
app.get('/product/:productId/:reviewId?', (req, res) => {
  const productId = req.params.productId;
  const reviewId = req.params.reviewId;
  if (reviewId) {
	res.send(`Produkt ID: ${productId}, Recenzja ID: ${reviewId}`);
  } else {
    res.send(`Produkt ID: ${productId}, brak recenzji`);
  }
});
// #endregion

// #region Obsługa parametrów z wyrażeniami regularnymi
app.get('/file/:filename(\\w+\\.\\w+)', (req, res) => {
  const filename = req.params.filename;
  res.send(`Plik: ${filename}`);
});
/* W tym przykładzie, trasa akceptuje tylko nazwy plików składające się z liter, cyfr i kropki,
 * np. "document.txt" lub "image.png".
 */
// #endregion

// #region Obsługa parametrów w middleware
app.use('/blog/:postId', (req, res, next) => {
  const postId = req.params.postId;
  console.log(`Dostęp do posta o ID: ${postId}`);
  next();
});
/* Middleware ten będzie logować ID posta za każdym razem,
 * gdy trasa zaczynająca się od "/blog/:postId" zostanie wywołana.
 */
// #endregion

// #region Obsługa parametrów w połączeniu z query string
app.get('/search/:term', (req, res) => {
  const term = req.params.term;
  const page = req.query.page || 1; // Pobieranie parametru query "page"
  res.send(`Wyniki wyszukiwania dla: ${term}, Strona: ${page}`);
});
/* W tym przykładzie, odwiedzając URL "/search/nodejs?page=2",
 * aplikacja zwróci "Wyniki wyszukiwania dla: nodejs, Strona: 2".
 */
// #endregion
// #endregion

// #region Zadania praktyczne
/* Zadanie praktyczne 1:
 * Stwórz trasę Express.js, która przyjmuje parametr "category" oraz opcjonalny parametr "itemId".
 * Trasa powinna zwracać odpowiednią wiadomość w zależności od tego, czy "itemId" jest obecny, czy nie.
 * Przykład:
 * - Dla URL "/shop/electronics" zwróć "Kategoria: electronics, brak konkretnego przedmiotu".
 * - Dla URL "/shop/electronics/42" zwróć "Kategoria: electronics, Przedmiot ID: 42".
 */

/* Zadanie praktyczne 2:
 * Stwórz trasę Express.js, która przyjmuje parametr "username" i zwraca profil użytkownika.
 * Dodatkowo, użyj middleware, aby zalogować każdorazowy dostęp do profilu użytkownika.
 * Przykład:
 * - Dla URL "/profile/johndoe" zwróć "Profil użytkownika: johndoe" i zaloguj dostęp.
*/

/* Zadanie praktyczne 3:
 * Stwórz trasę Express.js, która przyjmuje parametr "documentName" z wyrażeniem regularnym,
 * które akceptuje tylko nazwy dokumentów z rozszerzeniem ".pdf" lub ".docx".
 * Trasa powinna zwracać odpowiednią wiadomość z nazwą dokumentu.
 * Przykład:
 * - Dla URL "/documents/report.pdf" zwróć "Dokument: report.pdf".
 * - Dla URL "/documents/summary.docx" zwróć "Dokument: summary.docx".
 * - Dla URL "/documents/image.png" zwróć błąd 404 (nie znaleziono).
*/

/* Zadanie praktyczne 4:
 * Stwórz trasę Express.js, która przyjmuje parametr "tag" oraz parametr query "sort".
 * Trasa powinna zwracać wiadomość z tagiem i sposobem sortowania.
 * Przykład:
 * - Dla URL "/posts/javascript?sort=asc" zwróć "Tag: javascript, Sortowanie: asc".
 * - Dla URL "/posts/nodejs" zwróć "Tag: nodejs, Sortowanie: domyślne".
*/

/* Zadanie praktyczne 5:
 * Stwórz trasę Express.js, która przyjmuje parametr "year" i "month".
 * Trasa powinna zwracać wiadomość z podanym rokiem i miesiącem.
 * Przykład:
 * - Dla URL "/archive/2023/07" zwróć "Archiwum: Lipiec 2023".
 */
// #endregion
