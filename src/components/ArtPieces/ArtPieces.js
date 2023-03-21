import Link from "next/link";
import ArtPiecePreview from "../ArtPiecePreview";

export default function ArtPieces({ pieces }) {
  return (
    <>
      {pieces.map((piece) => {
        return (
          <Link key={piece.slug} href={`/art-pieces/${piece.slug}`}>
          <ArtPiecePreview
            imageSource={piece.imageSource}
            name={piece.name}
            artist={piece.artist}
          />
          </Link>
        );
      })}
    </>
  );
}
