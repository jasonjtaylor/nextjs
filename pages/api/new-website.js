import { MongoClient } from "mongodb";

async function handler(req, res) {
	if (req.method === "POST") {
		const data = req.body;

		const client = await MongoClient.connect(
			"mongodb+srv://JayTaylor:Camrynbitty1!@cluster0.rskg2.mongodb.net/websites?retryWrites=true&w=majority"
		);
		const db = client.db();

		const websitesCollection = db.collection("websites");

		const result = await websitesCollection.insertOne(data);

		client.close();

		res.status(201).json({ message: "Website Inserted" });
	}
}

export default handler;
