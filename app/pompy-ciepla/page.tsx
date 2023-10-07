import path from 'path';
import { promises as fs } from 'fs';

import Hero from '@/components/Hero';
import Logos from '@/components/Logos';
import Image from 'next/image';

interface HeroType {
  id: number;
  title: string;
  points: string[];
  imageUrl: string;
}

const PompyPage = async () => {
  const jsonDir = path.join(process.cwd(), 'data', '');
  const resHero = await fs.readFile(path.join(jsonDir, 'hero.json'), 'utf8');
  const hero: HeroType[] = JSON.parse(resHero);

  return (
    <>
      <Hero title={hero[1].title} points={hero[1].points} imageUrl={hero[1].imageUrl} />
      <Logos />
      <section className="heatPumps">
        <div className="heatPumps__container">
          <h2>
            Pompy ciepła stanowią energooszczędną alternatywę dla pieców na paliwa kopalne we
            wszystkich strefach klimatycznych
          </h2>
          <p>
            W dzisiejszych czasach każdy, kto chce zainstalować lub zmodernizować swój system
            grzewczy, prędzej czy później będzie musiał zmierzyć się z tematem Pomp ciepła. To, co
            jeszcze kilka lat temu było znane tylko ekspertom, dziś jest systemem grzewczym znanym i
            stosowanym coraz powszechniej. Czym zatem są te pompy ciepła?
          </p>
          <p>
            Pompy ciepła stanowią energooszczędną alternatywę dla pieców gazowych i na paliwa stałe
            we wszystkich strefach klimatycznych. Podobnie jak lodówka, pompy ciepła wykorzystują
            energię elektryczną do przenoszenia ciepła z jednego obszaru do drugiego. Ponieważ
            przekazują one ciepło, a nie wytwarzają go, pompy ciepła mogą skutecznie zapewnić
            komfortowe temperatury w domu. Są one zasilane energią elektryczną i przekazują ciepło
            za pomocą czynnika chłodniczego, zapewniając komfort przez cały rok. Ponieważ obsługują
            one zarówno chłodzenie, jak i ogrzewanie, właściciele domów mogą nie potrzebować
            instalować oddzielnych systemów do chłodzenia swoich domów.
          </p>
          <figure>
            <Image
              alt=""
              src="/images/Image-201.jpg"
              width={400}
              height={400}
              sizes="(min-width: 1220px) 400px, (min-width: 980px) 300px, (min-width: 520px) 250px, 200px"
            />
            <Image
              alt=""
              src="/images/Image-200.jpg"
              width={400}
              height={400}
              sizes="(min-width: 1220px) 400px, (min-width: 980px) 300px, (min-width: 520px) 250px, 200px"
            />
          </figure>
          <p>
            Stosunek zużytej energii elektrycznej do uzyskanej energii grzewczej jest niezwykle
            korzystny, ponieważ przeciętna pompa ciepła potrzebuje 1 kilowatogodziny energii
            elektrycznej, aby zamienić ją w 4 kilowatogodziny energii grzewczej.
          </p>
          <p>
            Pompy ciepła dzielą się na różne rodzaje w zależności od tego jakie dobierzemy kryterium
            podziału i tak możemy je podzielić ze względu na źródło dolne i górne oraz np. ze
            względu na budowę.
          </p>
          <h3>Rodzaje pomp ciepła ze względu na źródło</h3>
          <ul>
            <li>powietrze-powietrze (np. popularne klimatyzatory z opcją grzania)</li>
            <li>powietrze-woda (najbardziej obecnie popularne pompy ciepła powietrzne)</li>
            <li>woda-woda (wykorzystujące najczęściej energię słoneczną zakumulowaną w gruncie)</li>
          </ul>
          <h3>Rodzaje pomp ciepła ze względu konstrukcję</h3>
          <ul>
            <li>monolityczna (monoblokowa)</li>
            <li>podzielone, czyli tzw. split</li>
          </ul>
          <div className="block">
            <div>
              <h4>Pompy monoblokowe</h4>
              <p>
                W przypadku systemów powietrze-woda występują min. monoblokowe pompy ciepła, gdzie
                jednostka zewnętrzna montowana na zewnątrz budynku ma w sobie cały układ obiegu
                czynnika chłodniczego. Powietrze jako źródło ciepła jest zasysane bezpośrednio i
                ponownie wypuszczane. Woda grzewcza jest więc podgrzewana na zewnątrz budynku i
                doprowadzana zaizolowanymi rurami do zasobnika ciepła w domu lub bezpośrednio
                wpuszczana do systemu dystrybucji ciepła. Może wystąpić wersja z pośrednim
                wymiennikiem wypełnionym glikolem.
              </p>
            </div>
            <Image
              alt=""
              src="/images/Image-102.jpg"
              width={400}
              height={400}
              sizes="(min-width: 1220px) 400px, (min-width: 980px) 350px, (min-width: 640px) 300px, (min-width: 520px) 250px, 200px"
            />
          </div>
          <div className="block block--reverse">
            <Image
              alt=""
              src="/images/Image-103.jpg"
              width={400}
              height={400}
              sizes="(min-width: 1220px) 400px, (min-width: 980px) 350px, (min-width: 640px) 300px, (min-width: 520px) 250px, 200px"
            />
            <div>
              <h4>Pompy typu Split</h4>
              <p>
                W przypadku pompy ciepła typu split ważne elementy systemu są podzielone pomiędzy
                dwie jednostki: Jednostka zewnętrzna obejmuje zazwyczaj parownik, sprężarkę i zawór
                rozprężny. Wszystkie pozostałe elementy znajdują się w jednostce wewnętrznej. Do
                cyrkulacji czynnika chłodniczego pomiędzy jednostką zewnętrzną a wewnętrzną używa
                się zaizolowane rury miedziane przechodzącego przez ścianę domu.
              </p>
            </div>
          </div>
          <div className="block">
            <div>
              <h4>Pompy ciepła typu powietrze-powietrze</h4>
              <p>
                Najczęstszym typem pompy ciepła są klimatyzatory z opcją grzania, które najczęściej
                służą do okresowego podgrzewania pomieszczeń, rzadziej do całorocznego ogrzewania.
                Charakteryzują się stosunkowo wysoką sprawnością ale lokalnym zasięgiem. Dodatkowo
                konstrukcja klimatyzatora przewidziana jest przede wszystkim do chłodzenia i nie
                osiągnie takich parametrów jak typowa pompa ciepła.
              </p>
            </div>
            <Image
              alt=""
              src="/images/Image-202.jpg"
              width={400}
              height={400}
              sizes="(min-width: 1220px) 400px, (min-width: 980px) 350px, (min-width: 640px) 300px, (min-width: 520px) 250px, 200px"
            />
          </div>
          <div className="block block--reverse">
            <Image
              alt=""
              src="/images/Image-203.jpg"
              width={400}
              height={400}
              sizes="(min-width: 1220px) 400px, (min-width: 980px) 350px, (min-width: 640px) 300px, (min-width: 520px) 250px, 200px"
            />
            <div>
              <h4>Pompy ciepła typu powietrze-woda</h4>
              <p>
                Pompa wykorzystująca jako dolne źródło ciepła powietrze otaczające jednostkę
                zewnętrzną. Jako górne źródło wykorzystuje się wodę w kaloryferach lub w ogrzewaniu
                podłogowym. Dzisiejsza pompa ciepła może zmniejszyć zużycie energii elektrycznej do
                ogrzewania o około 25% w porównaniu z elektrycznym ogrzewaniem oporowym, takim jak
                piece i grzejniki płytowe.
              </p>
            </div>
          </div>
          <p>
            Powietrzne pompy ciepła są stosowane od wielu lat w cieplejszych strefach klimatycznych,
            ale do niedawna nie były stosowane w obszarach, które doświadczyły przedłużonych okresów
            temperatur poniżej zera. Jednak w ostatnich latach, technologia powietrznych pomp ciepła
            rozwinęła się tak, że teraz oferuje uzasadnioną alternatywę ogrzewania pomieszczeń w
            chłodniejszych regionach.
          </p>
          <div className="block">
            <div>
              <h4>Geotermalne pompy ciepła</h4>
              <p>
                Geotermalne (gruntowe lub wodne) pompy ciepła osiągają wyższą wydajność poprzez
                przenoszenie ciepła pomiędzy domem a ziemią lub pobliskim źródłem wody. Chociaż
                kosztują więcej, gruntowe pompy ciepła mają niskie koszty operacyjne, ponieważ
                wykorzystują stosunkowo stałe temperatury gruntu lub wody. Gruntowe pompy ciepła
                mają kilka głównych zalet. Mogą one zmniejszyć zużycie energii o 30%-60%,
                kontrolować wilgotność, są wytrzymałe i niezawodne oraz pasują do wielu różnych
                domów.
              </p>
            </div>
            <Image
              alt=""
              src="/images/Image-204.jpg"
              width={400}
              height={400}
              sizes="(min-width: 1220px) 400px, (min-width: 980px) 350px, (min-width: 640px) 300px, (min-width: 520px) 250px, 200px"
            />
          </div>
          <p>
            Czy gruntowa pompa ciepła jest odpowiednia dla Ciebie będzie zależeć od wielkości
            działki, podłoża i krajobrazu. Gruntowe lub wodne pompy ciepła mogą być stosowane w
            bardziej ekstremalnych klimatach (np w Polsce np strefa IV i V) niż powietrzne pompy
            ciepła, a zadowolenie klientów z systemów jest bardzo wysokie.
          </p>
          <h3>Jak zatem działa pompa ciepła?</h3>
          <p>
            Podstawowe działanie wszystkich pomp cieła jest takie samo, dlatego dla uproszczenia
            przestawimy działanie powietrznych pomp ciepła jako najbardziej popularnych i
            najczęściej wybieranych przez klientów.
          </p>
          <p>
            Pomimo nazwy, pompy ciepła nie wytwarzają ciepła - przenoszą je z jednego miejsca do
            drugiego. Piec wytwarza ciepło, które jest rozprowadzane w całym domu, ale pompa ciepła
            absorbuje energię cieplną z powietrza zewnętrznego (nawet w niskich temperaturach) i
            przenosi ją do powietrza wewnątrz budynku. Gdy w trybie chłodzenia pompa ciepła i
            klimatyzator są funkcjonalnie identyczne, pochłaniając ciepło z powietrza wewnątrz i
            uwalniając go przez jednostkę zewnętrzną. Pompa ciepła może działa więc w dwóch trybach,
            w trybie chłodniczym oraz w trybie grzewczym.
          </p>
          <p>
            Jedną z najważniejszych rzeczy do zrozumienia o działaniu pompy ciepła i procesie
            przekazywania ciepła jest to, że energia cieplna w naturalny sposób chce się
            przemieszczać do obszarów o niższych temperaturach i mniejszym ciśnieniu. Pompy ciepła
            opierają się na tej właściwości fizycznej, umieszczając ciepło w kontakcie z
            chłodniejszym, niższym ciśnieniem środowiskiem, aby ciepło mogło naturalnie przenosić
            się.
          </p>
          <p>
            Żeby pokazać jak bardzo uniwersalnych urządzeniem są pompy ciepła prace pompy ciepła
            zaczniemy opisywać zaczynając od opisu jej w pracy w trybie chłodzenia a potem
            przejdziemy do trybu grzewczego.
          </p>
          <Image
            alt=""
            src="/images/Image-107.jpg"
            width={600}
            height={369}
            className="pumpSchema"
            sizes="(min-width: 980px) 600px, 450px"
          />
          <h3>Działanie pompy w trybie chłodzenia</h3>
          <ol>
            <li>
              Ciekły czynnik chłodniczy jest pompowany przez urządzenie rozprężające na wewnętrznej
              wężownicy, która działa jako parownik. Powietrze z wnętrza domu jest wdmuchiwane przez
              wężownice, gdzie energia cieplna jest absorbowana przez czynnik chłodniczy. Powstałe w
              ten sposób chłodne powietrze jest wdmuchiwane do kanałów w domu. Proces pochłaniania
              energii cieplnej powoduje podgrzanie ciekłego czynnika chłodniczego i jego odparowanie
              do postaci gazu.
            </li>
            <li>
              Gazowy czynnik chłodniczy przechodzi teraz przez sprężarkę, która podnosi ciśnienie
              gazu. Proces zwiększania ciśnienia gazu powoduje jego nagrzewanie (typowa fizyczna
              właściwość gazów sprężonych). Gorący, sprężony czynnik chłodniczy przemieszcza się
              przez system do wężownicy w jednostce zewnętrznej.
            </li>
            <li>
              Wentylator w jednostce zewnętrznej przepuszcza powietrze zewnętrzne przez wężownice,
              które w trybie chłodzenia służą jako skraplacze. Ponieważ powietrze na zewnątrz domu
              jest chłodniejsze niż gorący sprężony gaz czynnika chłodniczego w wężownicy, ciepło
              jest przekazywane z czynnika chłodniczego do powietrza zewnętrznego. Podczas tego
              procesu czynnik chłodniczy skrapla się z powrotem do stanu ciekłego w miarę
              ochładzania. Ciepły płynny czynnik chłodniczy jest pompowany przez system do zaworu
              rozprężnego w jednostkach wewnętrznych.
            </li>
            <li>
              Zawór rozprężny zmniejsza ciśnienie ciepłego ciekłego czynnika chłodniczego, co
              powoduje jego znaczne schłodzenie. W tym momencie czynnik chłodniczy jest w chłodnym,
              ciekłym stanie i jest gotowy do przepompowania z powrotem do wężownicy parownika w
              jednostce wewnętrznej, aby ponownie rozpocząć cykl.
            </li>
          </ol>
          <h3>Działanie pompy w trybie grzewczym</h3>
          <p>
            Pompa ciepła w trybie ogrzewania działa tak samo jak w trybie chłodzenia, z tym że
            przepływ czynnika chłodniczego jest odwrócony. Innymi słowy, fizyka procesu jest taka
            sama. Energia cieplna jest absorbowana w jednostce zewnętrznej przez chłodny ciekły
            czynnik chłodniczy, zamieniając go w zimny gaz. Następnie do zimnego gazu stosowane jest
            ciśnienie, które zmienia go w gorący gaz. Gorący gaz jest chłodzony w jednostce
            wewnętrznej przez przepływające powietrze, które ogrzewa powietrze i skrapla gaz do
            ciepłej cieczy. Ciepła ciecz jest uwalniana od ciśnienia, gdy wchodzi do jednostki
            zewnętrznej, zamieniając się w chłodną ciecz i wznawiając cykl.
          </p>
          <h3>W skrócie o działaniu pomp ciepła</h3>
          <p>
            Pompy ciepła to wszechstronne, wydajne, odnawialne systemy chłodzenia i ogrzewania,
            bezobsługowe które potrafią zmienić przepływ czynnika chłodniczego i albo ogrzewać, albo
            chłodzić dom. Powietrze jest nawiewane na wężownicę parownika, przekazując energię
            cieplną z powietrza do czynnika chłodniczego. Ta energia cieplna krąży w czynniku
            chłodniczym do wężownicy skraplacza, gdzie jest uwalniana, gdy wentylator przedmuchuje
            powietrze przez wężownicę. Dzięki temu procesowi ciepło jest pompowane z jednego miejsca
            do drugiego.
          </p>
        </div>
      </section>
    </>
  );
};

export default PompyPage;
