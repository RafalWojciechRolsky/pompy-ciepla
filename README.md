# Pompa Ciepła 4 You

[![Next.js](https://img.shields.io/badge/Next.js-14.0.0-000000?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=flat-square&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.2.2-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![SCSS](https://img.shields.io/badge/SCSS-1.67.0-CC6699?style=flat-square&logo=sass)](https://sass-lang.com/)

Oficjalna strona internetowa [Pompy Ciepła 4 You](https://www.pompaciepla4you.pl/) - profesjonalny serwis i montaż pomp ciepła.

## 🚀 Funkcjonalności

- Nowoczesny, responsywny interfejs użytkownika
- Szybkie ładowanie stron dzięki statycznemu generowaniu (SSG)
- Optymalizacja obrazów z wykorzystaniem Next.js Image
- Formularze kontaktowe z walidacją (wyłączony - chat)
- Wsparcie dla bloga i artykułów (TODO)
- Sekcja z realizacjami (TODO)
- Informacje o ofercie i producentach

## 🛠 Technologie

- **Framework**: Next.js 14
- **Język**: TypeScript 5.2
- **Stylowanie**: SCSS (Sass)
- **Formularze**: React Hook Form z walidacją Zod
- **UI**: Własne komponenty + React Icons
- **Wideo**: React Player (YouTube)
- **Obrazy**: Sharp do optymalizacji

## 🚀 Uruchomienie projektu

1. Sklonuj repozytorium:

   ```bash
   git clone https://github.com/TwojLogin/pompy-ciepla.git
   cd pompy-ciepla
   ```

2. Zainstaluj zależności:

   ```bash
   npm install
   # lub
   yarn
   ```

3. Uruchom serwer deweloperski:

   ```bash
   npm run dev
   # lub
   yarn dev
   ```

4. Otwórz [http://localhost:3000](http://localhost:3000) w przeglądarce.

## 🏗 Budowanie

Aby zbudować aplikację produkcyjną:

```bash
npm run build
# lub
yarn build
```

## 📝 Struktura projektu

```
.
├── app/                  # Katalog aplikacji Next.js 13+
│   ├── (Home)/          # Strona główna
│   ├── about/           # O nas
│   ├── klimatyzatory/   # Oferta klimatyzacji
│   ├── pompy-ciepla/    # Oferta pomp ciepła
│   ├── producenci/      # Producenci
│   └── realizacje/      # Realizacje
├── components/          # Komponenty React
├── data/                # Dane statyczne
├── lib/                 # Pomocnicze funkcje
├── model/               # Modele TypeScript
├── public/              # Zasoby statyczne
└── styles/              # Style SCSS
```

## 📝 Wkład do projektu

1. Sforkuj projekt
2. Stwórz nowy branch (`git checkout -b feature/nowa-funkcjonalnosc`)
3. Zatwierdź zmiany (`git commit -am 'Dodaj nową funkcjonalność'`)
4. Wypchnij zmiany (`git push origin feature/nowa-funkcjonalnosc`)
5. Otwórz Pull Request

## 📜 Licencja

Ten projekt jest własnością Pompy Ciepła 4 You. Wszelkie prawa zastrzeżone.

## 📞 Kontakt

- Strona: [pompaciepla4you.pl](https://www.pompaciepla4you.pl)
