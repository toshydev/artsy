import ArtPieces from "@/components/ArtPieces";

export default function FavoritePiecesPage({
  favoritePieces,
  artPiecesInfo,
  onToggleFavorite,
  onSubmitComment,
}) {
  return (
    <ArtPieces
      pieces={favoritePieces}
      artPiecesInfo={artPiecesInfo}
      onToggleFavorite={onToggleFavorite}
      onSubmitComment={onSubmitComment}
    />
  );
}
