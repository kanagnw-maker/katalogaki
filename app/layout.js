export const metadata = {
  title: 'QR Menu App',
  description: 'A dynamic QR menu application using Next.js and Firebase',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}