"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import Profile from "@components/Profile";

const MyProfile = () => {
	const { data: session } = useSession();
	const router = useRouter();
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		const fetchPost = async () => {
			try {
				const response = await fetch(
					`/api/users/${session?.user.id}/posts`
				);
				if (response.ok) {
					const data = await response.json();
					setPosts(data);
				}
			} catch (error) {
				console.log("Error fetching prompts:", error);
			}
		};

		if (session?.user.id) fetchPost();
	}, [session?.user.id]);

	const handleEdit = (post) => {
		router.push(`/update-prompt?id=${post._id}`);
	};

	const handleDelete = async (post) => {
		const hasConfirmed = confirm(
			"Are you sure you want to delete this prompt?"
		);

		if (hasConfirmed) {
			try {
				console.log("Deleting prompt:", post._id);
				await fetch(`/api/prompt/${post._id.toString()}`, {
					method: "DELETE",
				});
				const filteredPosts = posts.filter((p) => p._id !== post._id);
				console.log("Filtered posts after deletion:", filteredPosts);

				setPosts(filteredPosts);
			} catch (error) {
				console.log(error);
			}
		}
	};
	return (
		<Profile
			name="My"
			desc="Welcome to your Personalised Profile Page"
			data={posts}
			handleEdit={handleEdit}
			handleDelete={handleDelete}
		/>
	);
};

export default MyProfile;
