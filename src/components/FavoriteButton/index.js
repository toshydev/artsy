import styled from "styled-components";

const path =
  "m12 21.35-1.45-1.32C5.4 15.36 2 12.27 2 8.5 2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53L12 21.35Z";

const StyledButton = styled.button`
  background: transparent;
  border: none;
`;

const StyledSvg = styled.svg`
  fill: red;
  background: black;
  width: 30px;
  height: 30px;
`;

const StyledSvgEmpty = styled.svg`
  fill: white;
  background: black;
  width: 30px;
  height: 30px;
`;

export default function FavoriteButton({ onToggleFavorite, isFavorite, slug }) {
  return (
    <StyledButton type="button" onClick={() => onToggleFavorite(slug)}>
      {isFavorite ? (
        <StyledSvg
          key="favorite"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d={path} />
        </StyledSvg>
      ) : (
        <StyledSvgEmpty
          key="not-favorite"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d={path} />
        </StyledSvgEmpty>
      )}
    </StyledButton>
  );
}