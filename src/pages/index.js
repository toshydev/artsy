import Spotlight from "@/components/Spotlight";

export default function SpotlightPage({
  pieces,
  onToggleFavorite,
  artPiecesInfo,
  onSubmitComment,
}) {
  return (
    <div>
      <Spotlight
        pieces={pieces}
        onToggleFavorite={onToggleFavorite}
        artPiecesInfo={artPiecesInfo}
        onSubmitComment={onSubmitComment}
      />
    </div>
  );
}
