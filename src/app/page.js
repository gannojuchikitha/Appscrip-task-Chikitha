import Header from "../components/Header";
import ProductSection from "../components/ProductSection";

async function getProducts() {
  const res = await fetch("https://fakestoreapi.com/products", {
    cache: "no-store",
  });
  return res.json();
}

export default async function Home() {
  const products = await getProducts();

  return (
    <main>
      <Header />
      <ProductSection products={products} />
    </main>
  );
}

