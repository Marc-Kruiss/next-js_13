import { use } from "react";

// getServerSideProps in Next13
const getCharacters = async () => {
  const res = await fetch("https://rickandmortyapi.com/api/character", {
    cache: "no-store",
  });
  console.log(res);
  const todos = await res.json();
  return todos;
};

async function Serverpage() {
  const characters = await getCharacters();
  return (
    <div>
      <h2>Server Fetching (getServerSideProps)</h2>
      {characters?.results?.map((c) => {
        return (
          <ul key={c.id}>
            <li>{c.name}</li>
          </ul>
        );
      })}
    </div>
  );
}

export default Serverpage;
