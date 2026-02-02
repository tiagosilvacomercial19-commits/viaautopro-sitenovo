import "./globals.css";

export const metadata = {
  title: "ViaAuto Pro",
  description: "Portal de intermediação automotiva",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <header className="header">
          <div className="logo">
            ViaAuto<span>Pro</span>
          </div>
          <nav>
            <a href="/">Início</a>
            <a href="/catalogo">Catálogo</a>
            <a href="/investidor">Investidor</a>
            <a href="/login" className="btn">Login</a>
          </nav>
        </header>

        <main>{children}</main>

        <footer className="footer">
          © 2026 ViaAuto Pro — Todos os direitos reservados
        </footer>
      </body>
    </html>
  );
}