# Pompa Ciepła 4 You — Case Study: Od Projektu do Wdrożenia

[![Next.js](https://img.shields.io/badge/Next.js-14-000000?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![SCSS](https://img.shields.io/badge/SCSS-1.67-CC6699?style=flat-square&logo=sass)](https://sass-lang.com/)

Kompleksowy projekt strony firmowej dla marki [Pompy Ciepła 4 You](https://www.pompaciepla4you.pl/), zrealizowany w pełnym cyklu produkcyjnym: **od koncepcji i makiety w Figmie, przez autorski design, aż po zaawansowaną implementację w kodzie.**

## 🎯 Cele Projektu i Osiągnięcia

Głównym celem było stworzenie profesjonalnej wizytówki cyfrowej, która buduje zaufanie u potencjalnych klientów szukających odnawialnych źródeł energii.

- **Pełny Cykl Deweloperski:** Projekt wykonany "od zera" — od pierwszej kreski w Figmie po deploy na serwer.
- **Wysoki Performance:** Optymalizacja pod kątem Core Web Vitals (SSG, Next.js Image Optimization).
- **User Experience (UX):** Intuicyjna nawigacja prowadząca użytkownika przez ofertę pomp ciepła i klimatyzacji aż do kontaktu.
- **SEO Ready:** Struktura semantyczna i metadane zoptymalizowane pod kątem wyszukiwarek.
- **Design-to-Code:** Wierne odwzorowanie skomplikowanych układów graficznych z zachowaniem pełnej responsywności (RWD).

## 🚀 Kluczowe Funkcjonalności

- **Custom UI:** Własny system komponentów zbudowany w oparciu o SCSS, zapewniający unikalny wygląd niezależny od gotowych bibliotek UI.
- **Dynamiczna Oferta:** Przejrzysta prezentacja produktów (pompy ciepła, klimatyzatory) oraz wspieranych producentów.
- **Sekcja Realizacji:** Portfolio wykonanych montaży, prezentujące profesjonalizm firmy.
- **Integracja Wideo:** Wykorzystanie `react-player` do prezentacji materiałów instruktażowych i promocyjnych.
- **Bezpieczeństwo i Walidacja:** Formularze zabezpieczone za pomocą `Zod` i `React Hook Form`.
- **Optymalizacja Mediów:** Wykorzystanie `sharp` oraz `plaiceholder` do generowania rozmytych placeholderów zdjęć (BlurHash).

## � Stos Technologiczny

- **Frontend**: Next.js 14 (App Router)
- **Język**: TypeScript (Strict Mode)
- **Stylowanie**: SCSS (Moduły styli, BEM, Variables)
- **Zarządzanie Stanem/Formularze**: React Hook Form + Zod
- **Media**: Sharp, React Player, React Icons
- **Jakość Kodu**: Biome (Linter & Formatter), ESLint

## 🏗 Struktura Projektu

```
.
├── app/                  # Architektura App Router (Strony, API, Middleware)
├── components/          # Reużywalne komponenty UI (Atomy, Molekuły, Organizmy)
├── data/                # Statyczne źródła danych (teksty, parametry techniczne)
├── lib/                 # Utility functions, konfiguracje bibliotek
├── model/               # Definicje typów i interfejsów TypeScript
├── public/              # Statyczne zasoby (obrazy, wideo, ikony)
└── styles/              # Globalne style, mixiny i zmienne SCSS
```

## � Uruchomienie

1.  `npm install`
2.  `npm run dev`
3.  Odwiedź `localhost:3000`

---

Projekt jest własnością **Pompy Ciepła 4 You**. Implementacja: Rafał Wojciech Rolsky.
