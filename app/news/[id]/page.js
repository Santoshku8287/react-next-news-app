export default function ({ params }) {
  return (
    <>
      <h1>News Detail page</h1>
      <p>News {params.id}</p>
    </>
  );
}
