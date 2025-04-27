import React from "react";
import ajiGallina from "../images/Ají_de_gallina_-_Tradicional.jpg";
import anticuchos from "../images/receta-anticuchos-peruanos.jpg";
import "./Blog.css";

const blogPosts = [
  {
    title: "5 secretos de nuestro Ají de Gallina",
    image: ajiGallina,
    description:
      "Descubre por qué nuestro ají de gallina es tan cremoso y lleno de sabor.",
  },
  {
    title: "Receta: Anticuchos al estilo El Buen Sabor",
    image: anticuchos,
    description:
      "Aprende a preparar anticuchos como los que servimos en el restaurante.",
  },
];

function Blog() {
  return (
    <section id="blog">
      <h2>Blog Gastronómico</h2>
      {blogPosts.map((post, index) => (
        <article key={index}>
          <h3>{post.title}</h3>
          <img src={post.image} alt={post.title} width="300" />
          <p>{post.description}</p>
        </article>
      ))}
    </section>
  );
}

export default Blog;
