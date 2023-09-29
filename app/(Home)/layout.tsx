import Contact from '@/components/FormContact/Contact';
import Logos from '@/components/Logos';
import Movies from '@/components/Movies';
import Services from '@/components/Services/Services';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <Logos />
      <Movies />
      <Services />
      <Contact />
    </>
  );
}
