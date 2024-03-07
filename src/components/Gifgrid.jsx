import React, { useState } from "react";
import { useEffect } from "react";

export const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);

  // petición para traer la información del API
  useEffect(() => {
    GetGifs(category).then(setImages);
  }, [category])
  return (
    <div className="gifs-grilla">
      <h3>{category}</h3>
      <ol  className="list-gifs">
        {images.map((image) => (
          <li key={image.id}>
            <img src={image.url} alt={image.title} />
          </li>
        ))}
      </ol>
    </div>
  );
};

const apiKey = import.meta.env.VITE_API_KEY;

async function GetGifs(category) {
  try {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=12`
    );
    const { data } = await response.json();
    const gifs = data.map((imagen) => ({
      id: imagen.id,
      title: imagen.title,
      url: imagen.images.downsized_medium.url,
    }));
    return gifs;
  } catch (error) {
    console.error(error.message);
  }
}
