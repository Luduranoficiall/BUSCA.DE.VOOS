import { useState } from 'react';

const mockData = [
  { influencer: 'viagemtop', clicks: 120, vendas: 8 },
  { influencer: 'mochilao2025', clicks: 90, vendas: 5 },
  { influencer: 'familiaemviagem', clicks: 60, vendas: 3 },
];

export default function AffiliatesDashboard() {
  const [data] = useState(mockData);
  return (
    <main>
      <h1>Dashboard de Afiliados</h1>
      <table>
        <thead>
          <tr>
            <th>Influencer</th>
            <th>Cliques</th>
            <th>Vendas</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.influencer}>
              <td>{row.influencer}</td>
              <td>{row.clicks}</td>
              <td>{row.vendas}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
