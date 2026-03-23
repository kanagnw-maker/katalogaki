import './globals.css';

export const metadata = {
  title: {
    default: 'QR Menu App',
    template: '%s | QR Menu App',
  },
  description: 'A dynamic QR menu application using Next.js and Firebase',
  icons: {
    icon: '/favicon.ico',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
