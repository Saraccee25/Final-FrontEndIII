import React, { useEffect, useState } from "react";
import { getAllCharacters } from "../api/rickAndMortyApi";
import CharacterCard from "../components/CharacterCard"; // Importamos CharacterCard
import styles from "../styles/Product.module.css";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getAllCharacters();
        setProducts(data.results); 
        setLoading(false);
      } catch (err) {
        setError("Failed to load products");
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className={styles.productList}>
      {products.map((product) => (
        <CharacterCard 
          key={product.id} 
          name={product.name} 
          image={product.image} 
          status={product.status} 
          gender={product.gender} 
        /> 
      ))}
    </div>
  );
};

export default Product;
