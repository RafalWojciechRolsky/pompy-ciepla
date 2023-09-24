import Logos from '@/components/Logos';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <Logos />
    </>
  );
}
