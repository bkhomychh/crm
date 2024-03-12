export interface LayoutProps {
  children: React.ReactNode;
  header: React.ReactNode;
  toolbar: React.ReactNode;
  modal: React.ReactNode;
}

export default function Layout({
  header,
  toolbar,
  modal,
  children,
}: LayoutProps) {
  return (
    <>
      {header}
      {modal}
      <main>
        {toolbar}
        {children}
      </main>
    </>
  );
}
