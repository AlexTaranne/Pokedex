interface PokemonCardProps {
  pokemon: {
    name: string;
    imgSrc: string;
  };
}

export default function PokemonCard({ pokemon }: PokemonCardProps) {
  return (
    <figure>
      {pokemon.imgSrc ? (
        <img src={pokemon.imgSrc} alt="bulbasaur" />
      ) : (
        <p>???</p>
      )}
      <figcaption>{pokemon.name}</figcaption>
    </figure>
  );
}
