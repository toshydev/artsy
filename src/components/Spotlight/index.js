import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import FavoriteButton from "../FavoriteButton";

export default function Spotlight({ pieces, onToggleFavorite, artPiecesInfo }) {
  const [randomIndex, setRandomIndex] = useState(0);
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * pieces.length);
    setRandomIndex(randomIndex);
  }, [pieces]);

  const currentPiece = pieces[randomIndex];
  const isFavorite = artPiecesInfo.find(
    (piece) => piece.slug === currentPiece.slug
  )?.isFavorite;

  return (
    <>
      <Link href={`/art-pieces/${currentPiece.slug}`}>
        <Image
          src={currentPiece.imageSource}
          alt={currentPiece.name}
          height={400}
          width={300}
        />
      </Link>
      <FavoriteButton
        onToggleFavorite={onToggleFavorite}
        slug={currentPiece.slug}
        isFavorite={isFavorite}
      />
      <h3>Spotlight: @{currentPiece.artist}</h3>
    </>
  );
}
