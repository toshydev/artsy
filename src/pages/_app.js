import GlobalStyle from "../styles";
import { SWRConfig } from "swr";
import useSWR from "swr";

const URL = "https://example-apis.vercel.app/api/art";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function App({ Component, pageProps }) {
  const { data, error, isLoading } = useSWR(URL, fetcher);
  console.log(data);
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  return (
    <>
      <GlobalStyle />
      <SWRConfig value={{ fetcher }}>
        <Component {...pageProps} pieces={data} />
      </SWRConfig>
    </>
  );
}
