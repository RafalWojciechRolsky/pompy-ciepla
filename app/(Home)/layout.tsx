import Contact from '@/components/FormContact/Contact';
import Logos from '@/components/Logos';
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
      <Services />
      <Contact />
    </>
  );
}
