import PageBlock from "../components/PageBlock";
import NavBar from "../components/NavBar";
import ProductContactHeader from "../components/ProductContactHeader";
import FooterNavBar from "../components/FooterNavBar";
import ProductsContent from "../components/productscontent/ProductsContent";

const ProductsPage = () => {
  return (
    <section id="product" style={{ backgroundColor: "#fdefef" }}>
      <PageBlock />
      <NavBar />
      <ProductContactHeader pages="Products" />
      <ProductsContent />
      <FooterNavBar />
    </section>
  );
};

export default ProductsPage;
