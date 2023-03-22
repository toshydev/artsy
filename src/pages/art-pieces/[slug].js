import CommentForm from "@/components/CommentForm";
import Comments from "@/components/Comments";
import FavoriteButton from "@/components/FavoriteButton";
import Image from "next/image";
import { useRouter } from "next/router";
import styled from "styled-components";
import { uid } from "uid";

const StyledColorSection = styled.section`
  display: flex;
  align-items: center;
`;

const StyledColorContainer = styled.div`
  width: 25px;
  height: 25px;
  background: ${(props) => props.color};
`;

function getNewHeight(width, height, size) {
  const ratio = width / height;
  return ratio * size;
}

export default function ArtPieceDetails({
  pieces: favoritePieces,
  artPiecesInfo,
  onToggleFavorite,
  onSubmitComment,
}) {
  const router = useRouter();
  const { slug } = router.query;
  const currentPiece = favoritePieces.find((piece) => {
    return piece.slug === slug;
  });
  const isFavorite = artPiecesInfo.find(
    (piece) => piece.slug === currentPiece.slug
  )?.isFavorite;
  const comments = artPiecesInfo.find(
    (piece) => piece.slug === currentPiece.slug
  )?.comments;

  return (
    <div>
      <button
        type="button"
        aria-label="back to art pieces list"
        onClick={() => {
          router.push("/art-pieces");
        }}
      >
        Back
      </button>
      <h1>Title: {currentPiece.name}</h1>
      <Image
        src={currentPiece.imageSource}
        alt={currentPiece.name}
        width={390}
        height={getNewHeight(
          currentPiece.dimensions.width,
          currentPiece.dimensions.height,
          390
        )}
      />
      <FavoriteButton
        onToggleFavorite={onToggleFavorite}
        isFavorite={isFavorite}
        slug={currentPiece.slug}
      />
      <StyledColorSection>
        <h4>Colors: </h4>
        {currentPiece.colors.map((color) => {
          return <StyledColorContainer key={uid()} color={color} />;
        })}
      </StyledColorSection>
      <ul>
        <li>Artist: {currentPiece.artist}</li>
        <li>Year: {currentPiece.year}</li>
        <li>Genre: {currentPiece.genre}</li>
      </ul>
      <CommentForm onSubmitComment={onSubmitComment} slug={currentPiece.slug} />
      <Comments comments={comments} />
    </div>
  );
}
