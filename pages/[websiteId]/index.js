import { MongoClient, ObjectId } from "mongodb";
import { Fragment } from "react";
import Head from "next/head";

import websiteDetail from "../../components/website/WebsiteDetail";

function WebsiteDetails(props) {
	return (
		<Fragment>
			<Head>
				<title>{props.websiteData.title}</title>
				<meta name="description" content={props.websiteData.description} />
			</Head>
			<WebsiteDetail
				image={props.websiteData.image}
				title={props.websiteData.title}
				address={props.websiteData.address}
				description={props.websiteData.description}
			/>
		</Fragment>
	);
}

export async function getStaticPaths() {
	const client = await MongoClient.connect(
		"mongodb+srv://JayTaylor:Camrynbitty1!@cluster0.rskg2.mongodb.net/websites?retryWrites=true&w=majority"
	);
	const db = client.db();

	const websitesCollection = db.collection("websites");

	const websites = await websitesCollection.find({}, { _id: 1 }).toArray();

	client.close();

	return {
		fallback: "blocking",
		paths: websites.map((website) => ({
			params: { websiteId: website._id.toString() },
		})),
	};
}

export async function getStaticProps(context) {
	// fetch data for a single website
	const websiteId = context.params.websiteId;

	const client = await MongoClient.connect(
		"mongodb+srv://JayTaylor:Camrynbitty1!@cluster0.rskg2.mongodb.net/websites?retryWrites=true&w=majority"
	);
	const db = client.db();

	const websitesCollection = db.collection("websites");

	const selectedWebsite = await websitesCollection.findOne({
		_id: ObjectId(websiteId),
	});

	client.close();

	return {
		props: {
			websiteData: {
				id: selectedWebsite._id.toString(),
				title: selectedWebsite.title,
				address: selectedWebsite.address,
				image: selectedWebsite.image,
				description: selectedWebsite.description,
			},
		},
	};
}

export default WebsiteDetails;
