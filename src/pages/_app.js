import GlobalStyle from "@/styles";
import useSWR, { SWRConfig } from "swr";
import Layout from "@/components/Layout";


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
  const { data, error, isLoading } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <Layout>
      <GlobalStyle />
      <SWRConfig value={{ fetcher }}>
        <Component {...pageProps} pieces={data} />
      </SWRConfig>
    </Layout>
  );
}
