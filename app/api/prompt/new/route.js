import { connectDB } from "@utils/database";
import Prompt from "@models/prompt";

export const POST = async (req) => {
	try {
		await connectDB();

		const { prompt, userId, tag } = req.body;

		const newPrompt = new Prompt({
			prompt,
			creator: userId,
			tag,
		});

		await newPrompt.save();

		return new Response(JSON.stringify(newPrompt), { status: 201 });
	} catch (error) {
		return new Response("Failed to create a new prompt", { status: 500 });
	}
};
