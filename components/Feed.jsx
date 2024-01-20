"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import PromptCard from "./PromptCard";

export const PromptCardList = ({ data, handleTagClick }) => {
	return (
		<div className="mt-16 prompt_layout">
			{data.map((post) => (
				<PromptCard
					key={post._id}
					post={post}
					handleTagClick={handleTagClick}
				/>
			))}
		</div>
	);
};

const Feed = () => {
	const [posts, setPosts] = useState([]);
	const [filteredPosts, setFilteredPosts] = useState([]);
	const router = useRouter();

	const [searchText, setSearchText] = useState("");
	const handleSearchChange = (e) => {
		setSearchText(e);
		filterPosts(e);
	};

	const filterPosts = (searchText) => {
		if (searchText.trim() === "") {
			setFilteredPosts(posts);
		} else {
			const filtered = posts.filter((post) => {
				const tagsArray = Array.isArray(post.tag) ? post.tag : [post.tag];
				const tagString = tagsArray.join(" ");
				return (
					tagString.toLowerCase().includes(searchText.toLowerCase()) ||
					post.prompt.toLowerCase().includes(searchText.toLowerCase()) ||
					post.creator.username
						.toLowerCase()
						.includes(searchText.toLowerCase())
				);
			});
			setFilteredPosts(filtered);
		}
	};

	const handleTagClick = (tag) => {
		setSearchText(tag);
		filterPosts(tag);
	};

	

	useEffect(() => {
		const fetchPost = async () => {
			try {
				const response = await fetch("/api/prompt");
				if (response.ok) {
					const data = await response.json();
					setPosts(data);
					setFilteredPosts(data);
				}
			} catch (error) {
				console.log("Error fetching prompts:", error);
			}
		};

		fetchPost();
	}, []);

	return (
		<section className="feed">
			<form action="" className="relative w-full flex-center">
				<input
					type="text"
					placeholder="Search for a tag or username"
					value={searchText}
					onChange={(e) => handleSearchChange(e.target.value)}
					required
					className="search_input peer"
				/>
			</form>

			{filterPosts.length > 0 ? (
				<PromptCardList
					data={filteredPosts}
					handleTagClick={handleTagClick}
				/>
			) : (
				<p>No matching prompts found.</p>
			)}
		</section>
	);
};

export default Feed;
