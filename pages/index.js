import { useEffect } from "react";
import { MongoClient } from "mongodb";
import WebsiteList from "../components/websites/WebsiteList";
import Head from "next/head";
import { Provider } from "react-redux";
import { createStore } from "redux";
import allReducers from "../components/reducers/index";

const store = createStore(allReducers);
function HomePage(props) {
	return (
		<div>
			<Head>
				<title>NextJS Project</title>
				<meta name="description" content="Browse for Next JS Websites!" />
			</Head>
			<Provider store={store}>
				<WebsiteList websites={props.websites} />
			</Provider>
		</div>
	);
}

export async function getStaticProps() {
	// fetch data from API. Always need to return an object
	const client = await MongoClient.connect(
		"mongodb+srv://JayTaylor:Camrynbitty1!@cluster0.rskg2.mongodb.net/websites?retryWrites=true&w=majority"
	);
	const db = client.db();

	const websitesCollection = db.collection("websites");

	const websites = await websitesCollection.find().toArray();

	client.close();

	return {
		props: {
			websites: websites.map((website) => ({
				title: website.title,
				address: website.address,
				image: website.image,
				id: website._id.toString(),
			})),
		},
		revalidate: 1, //reloads every second
	};
}

export default HomePage;
