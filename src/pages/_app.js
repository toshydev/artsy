import GlobalStyle from "@/styles";
import useSWR, { SWRConfig } from "swr";
import Layout from "@/components/Layout";
import { useImmer } from "use-immer";

const fetcher = async (url) => {
  const response = await fetch(url);

  if (!response.ok) {
    const error = new Error("An error occurred while fetching the data.");

    error.info = await response.json();
    error.status = response.status;
    throw error;
  }

  return response.json();
};

export default function App({ Component, pageProps }) {
  const {
    data: piecesData,
    error,
    isLoading,
  } = useSWR("https://example-apis.vercel.app/api/art", fetcher);

  const [artPiecesInfo, updateArtPiecesInfo] = useImmer([]);
  const favoriteSlugs = artPiecesInfo
    .filter((piece) => piece.isFavorite)
    .map((favoritePiece) => favoritePiece.slug);

  const favoritePieces = piecesData?.filter((piece) =>
    favoriteSlugs.includes(piece.slug)
  );

  function handleToggleFavorite(slug) {
    updateArtPiecesInfo((draft) => {
      const piece = draft.find((piece) => piece.slug === slug);
      if (piece) {
        piece.isFavorite = !piece.isFavorite;
      } else {
        draft.push({
          slug,
          isFavorite: true,
        });
      }
    });
  }

  function handleSubmitComment(slug, message) {
    const currentDate = new Date().toLocaleDateString("de-DE");
    const currentTime = new Date().toJSON().slice(11, 19);
    updateArtPiecesInfo((draft) => {
      const piece = draft.find((piece) => piece.slug === slug);
      if (piece) {
        piece?.comments.push({
          text: message,
          date: currentDate,
          time: currentTime,
        });
      } else {
        draft.push({
          slug,
          comments: [{ text: message, date: currentDate, time: currentTime }],
        });
      }
    });
  }

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <Layout>
      <GlobalStyle />
      <SWRConfig value={{ fetcher }}>
        <Component
          {...pageProps}
          pieces={piecesData}
          artPiecesInfo={artPiecesInfo}
          onToggleFavorite={handleToggleFavorite}
          favoritePieces={favoritePieces}
          onSubmitComment={handleSubmitComment}
        />
      </SWRConfig>
    </Layout>
  );
}
