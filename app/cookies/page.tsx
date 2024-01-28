const CookiesPage = async () => {
  return (
    <>
      <section className="cookies">
        <div className="cookies__container">
          {' '}
          <h2>Informacja o ciasteczkach (cookies)</h2>

          <h3>Brak użycia ciasteczek</h3>
          <p>
            Niniejsza strona internetowa <strong>nie korzysta z ciasteczek</strong>{' '}
            (&quot;cookies&quot;) ani żadnych innych technologii śledzących w celu zbierania danych
            dotyczących użytkowników podczas ich wizyty na stronie. Szanujemy prywatność naszych
            użytkowników i staramy się zapewnić im jak największy komfort korzystania z serwisu bez
            konieczności zbierania dodatkowych informacji.
          </p>

          <h3>Co to są ciasteczka?</h3>
          <p>
            Ciasteczka (cookies) to niewielkie pliki tekstowe wysyłane przez serwis internetowy do
            urządzenia użytkownika, zazwyczaj zapisywane w przeglądarce internetowej. Są one
            powszechnie wykorzystywane na wielu stronach internetowych do zapewnienia prawidłowego
            funkcjonowania serwisów, personalizacji treści oraz analizy ruchu internetowego.
          </p>

          <h3>Dlaczego nie korzystamy z ciasteczek?</h3>
          <p>
            Podjęliśmy decyzję o niewykorzystywaniu ciasteczek oraz innych technologii śledzących,
            aby zapewnić użytkownikom maksymalny poziom prywatności i bezpieczeństwa podczas
            przeglądania naszej strony. Uznaliśmy, że możemy dostarczać wartościowe treści i
            informacje bez konieczności zbierania i analizowania danych o zachowaniach naszych
            użytkowników.
          </p>

          <h3>Aplikacje analityczne</h3>
          <p>
            Nasza strona <strong>nie korzysta również z żadnych aplikacji analitycznych</strong>,
            takich jak Google Analytics czy inne narzędzia służące do monitorowania i analizowania
            ruchu na stronie. Wszelkie decyzje dotyczące rozwoju serwisu i dostosowywania treści do
            potrzeb naszych użytkowników podejmujemy na podstawie bezpośrednich opinii i sugestii.
          </p>

          <h3>Twoja prywatność</h3>
          <p>
            Cenimy prywatność naszych użytkowników i staramy się oferować przejrzyste warunki
            korzystania ze strony bez naruszania ich prywatności. Jeśli masz jakiekolwiek pytania
            dotyczące naszej polityki braku użycia ciasteczek i aplikacji analitycznych, prosimy o
            kontakt.
          </p>
        </div>
      </section>
    </>
  );
};

export default CookiesPage;
