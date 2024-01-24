import Image from 'next/image';
import { FC } from 'react';
import MovieHaier from './MovieHaier';

interface IPropsTypes {
  name?: string;
}

const Haier: FC<IPropsTypes> = (props) => {
  return (
    <section className="haier__container">
      <h2>Haier</h2>
      <p>
        Historia firmy Haier: od momentu powstania w 1984 roku, firma jest prowadzona przez tego
        samego dyrektora generalnego, Zhang Ruimin, który zawsze miał jasny cel: budować wysokiej
        jakości, niezawodne produkty. Przez ponad 30 lat firma Haier poświęciła swoją energię i
        wiedzę na opracowanie najlepszych urządzeń, aby zadowolić najbardziej wymagających klientów.
      </p>
      <p>
        W ciągu pierwszego roku od objęcia stanowiska, w odpowiedzi na skargi dotyczące wadliwych
        lodówek, jego radykalne działanie polegające na rozbijaniu lodówek młotkiem na oczach
        pracowników zostało uznane za ważny kamień węgielny marki.
      </p>
      <p>
        Od tego czasu firma ewoluowała wraz ze zmieniającymi się wymaganiami współczesnego świata i
        dzisiejszego konsumenta, wykorzystując swoje podstawowe wartości, jakimi są jakość i
        niezawodność, aby oferować najwyższej jakości, innowacyjne i nowoczesne produkty.
      </p>
      <p>
        Firmie Haier celem jest dostarczanie najwyższej jakości, najnowocześniejszych produktów,
        które odpowiadają na stale zmieniające się potrzeby współczesnego domu, dając konsumentom
        więcej czasu na rzeczy, które są dla nich ważne.
      </p>
      <div className="sub-section">
        <Image
          alt=""
          src="/images/Image-107.jpg"
          width={600}
          height={369}
          className="pumpSchema"
          sizes="(min-width: 980px) 600px, 450px"
        />
        <div className="sub-section__text">
          <p>
            Produkty Haier są zbudowane z najwyższej jakości materiałów przez wysoko
            wykwalifikowanych inżynierów, zawierają najnowsze innowacje technologiczne, które
            zostały zaprojektowane tak, aby były łatwe w użyciu, wydajne i w efekcie oszczędzały
            czas.
          </p>
          <p>
            Poza tym firma posiada centra badawczo-rozwojowe na wszystkich pięciu kontynentach
            świata, których jedyną misją jest tworzenie rozwiązań, dzięki którym klienci odzyskają
            swój cenny czas.
          </p>
        </div>
      </div>
      <MovieHaier />
      <h4>Przydatne linki</h4>
      <ul>
        <li>
          <a href="https://www.haier.com/global/">Link do oficjalnej strony producenta</a>
        </li>
        <li>
          <a href="https://www.youtube.com/@Haieramerica1">Link do kanału Haier na youtube</a>
        </li>
      </ul>
    </section>
  );
};

export default Haier;
