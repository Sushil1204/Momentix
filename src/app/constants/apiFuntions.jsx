export const fetchPosts = async () => {
    const response = await fetch('https://66fd8c7a6993693089558ade.mockapi.io/posts');
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
};
