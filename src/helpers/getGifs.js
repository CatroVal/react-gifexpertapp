
export const getGifs = async ( category ) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=EA72X9c6o7pIr6FI1kW5MvvSA4yS5h8e`;
    const res = await fetch(url);
    const { data } = await res.json();

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.fixed_height.url
        }
    });

    //console.log(gifs);
    return gifs;

}

