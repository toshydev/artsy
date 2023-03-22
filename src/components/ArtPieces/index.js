import Link from "next/link";
import ArtPiecePreview from "../ArtPiecePreview";
import FavoriteButton from "../FavoriteButton";

export default function ArtPieces({ pieces, onToggleFavorite, artPiecesInfo }) {
  return (
    <>
      {pieces.map((piece) => {
        return (
          <div key={piece.slug}>
            <FavoriteButton
              onToggleFavorite={onToggleFavorite}
              slug={piece.slug}
              isFavorite={
                artPiecesInfo.find((pieceInfo) => pieceInfo.slug === piece.slug)
                  ?.isFavorite
              }
            />
            <Link href={`/art-pieces/${piece.slug}`}>
              <ArtPiecePreview
                imageSource={piece.imageSource}
                name={piece.name}
                artist={piece.artist}
              />
            </Link>
          </div>
        );
      })}
    </>
  );
}
