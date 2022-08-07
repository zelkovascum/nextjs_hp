const apiUrl = "https://jsonplaceholder.typicode.com/posts";

export const getAllPostsData = async () => {
	const res = await fetch(new URL(apiUrl));
	const posts = await res.json();
	return posts;
};

export const getAllPostsIds = async () => {
	const res = await fetch(new URL(apiUrl));
	const posts = await res.json();

	return posts.map((post) => {
		return {
			params: {
				id: String(post.id),
			},
		};
	});
};

export const getPostData = async (id) => {
	const res = await fetch(new URL(`${apiUrl}/${id}`));
	const post = await res.json();

	return post;
};
