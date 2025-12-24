import { TrackingTags } from '../components/TrackingTags';

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <TrackingTags />
        {children}
      </body>
    </html>
  );
}
