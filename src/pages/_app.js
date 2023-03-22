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

  const [piecesInfo, updatePiecesInfo] = useImmer([]);

  function handleToggleFavorite(slug) {
    updatePiecesInfo((draft) => {
      const piece = draft.find((piece) => piece.slug === slug);
      if (piece) {
        piece.isFavorite = !piece.isFavorite;
      } else {
        draft.push({ ...piece, isFavorite: true });
      }
    });
  }

  function handleAddComment(slug) {
    const currentDate = new Date().toLocaleDateString("de-DE");
    const currentTime = new Date().toJSON().slice(11, 19);
    updatePiecesInfo((draft) => {
      const piece = draft.find((piece) => piece.slug === slug);
      if (piece) {
        piece.comments += {
          text: comment,
          date: currentDate,
          time: currentTime,
        };
      } else {
        draft.push({ ...piece, comments: [] });
      }
    });
  }

  const [artPiecesInfo, updateArtPiecesInfo] = useImmer([]);

  function handleToggleFavourite(slug) {
    updateArtPiecesInfo((draft) => {
      const piece = draft.find((piece) => piece.slug === slug);
      if (piece) {
        piece.isFavourite = !piece.isFavourite;
      } else {
        draft.push({ slug, isFavourite: true });
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
          pieces={data}
          artPiecesInfo={artPiecesInfo}
          onToggleFavourite={handleToggleFavourite}
        />
      </SWRConfig>
    </Layout>
  );
}
