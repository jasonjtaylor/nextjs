import { useRouter } from "next/router";
import NewWebsiteForm from "../../components/websites/NewWebsiteForm";
import Head from "next/head";

function NewWebsitePage() {
	const router = useRouter();
	async function addWebsiteHandler(enteredWebsiteData) {
		const response = await fetch("/api/new-website", {
			method: "POST",
			body: JSON.stringify(enteredWebsiteData),
			headers: {
				"Content-Type": "application/json",
			},
		});
		const data = await response.json();

		console.log(data);

		router.push("/");
	}

	return (
		<>
			<Head>
				<title>Add a new Next JS Website</title>
				<meta name="description" content="Add a NextJS Site you have found" />
			</Head>
			<NewWebsiteForm onAddWebsite={addWebsiteHandler} />
		</>
	);
}

export default NewWebsitePage;
