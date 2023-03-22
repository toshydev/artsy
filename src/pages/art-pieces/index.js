import ArtPieces from "@/components/ArtPieces";

export default function ArtPiecesPage({
  artPiecesInfo,
  onToggleFavorite,
  pieces,
  onSubmitComment,
}) {
  return (
    <ArtPieces
      artPiecesInfo={artPiecesInfo}
      onToggleFavorite={onToggleFavorite}
      pieces={pieces}
      onSubmitComment={onSubmitComment}
    />
  );
}
