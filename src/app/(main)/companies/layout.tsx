export interface LayoutProps {
  children: React.ReactNode;
  header: React.ReactNode;
  modal: React.ReactNode;
}

export default function Layout({ header, modal, children }: LayoutProps) {
  return (
    <>
      {header}
      {modal}
      <main>{children}</main>
    </>
  );
}
