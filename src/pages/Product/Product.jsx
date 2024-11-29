import React, { useEffect, useState } from "react";
import { getAllCharacters } from "../../service/rickAndMortyApi";
import CharacterCard from "../../components/CharacterCard/CharacterCard"; 
import styles from "./Product.module.css";

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
          character={product} 
        />
      ))}
    </div>
  );
};

export default Product;
