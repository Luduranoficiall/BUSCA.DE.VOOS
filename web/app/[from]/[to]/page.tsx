export default function Route({ params }) {
  const { from, to } = params;
  return (
    <>
      <h1>Passagens baratas de {from} para {to}</h1>
      <p>Compare voos, hotéis e passeios com IA.</p>
    </>
  );
}
