import ArtPiecePreview from "../ArtPiecePreview/ArtPiecePreview";

export default function ArtPieces({ pieces }) {
  return (
    <>
      {pieces.map((piece) => {
        return (
          <ArtPiecePreview
            key={piece.slug}
            imageSource={piece.imageSource}
            name={piece.name}
            artist={piece.artist}
          />
        );
      })}
    </>
  );
}
