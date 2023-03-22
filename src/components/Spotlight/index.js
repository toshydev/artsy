import Image from "next/image";


export default function Spotlight({ pieces }) {
  const currentPiece = pieces[Math.floor(Math.random() * pieces.length)];

  return (
    <>
      <Image
        src={currentPiece.imageSource}
        alt={currentPiece.name}
        height={400}
        width={300}
      ></Image>
      <h3 key={currentPiece.slug}>Spotlight: @{currentPiece.name}</h3>
    </>
  );
}

