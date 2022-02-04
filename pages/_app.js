import "../styles/globals.css";
import Layout from "../components/layout/Layout";
import Footer from "../components/layout/Footer";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Layout>
				<Component {...pageProps} />
			</Layout>
			<Footer />
		</>
	);
}

export default MyApp;
