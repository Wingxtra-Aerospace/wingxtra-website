import './globals.css';

export const metadata = {
  title: 'Wingxtra',
  description: 'Wingxtra website'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main className="site-container">{children}</main>
      </body>
    </html>
  );
}
