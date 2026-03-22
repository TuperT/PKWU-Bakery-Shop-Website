import "./ProductContent.css";
import Product from "../Products/Product";

function ProductsContent() {
  return (
    <div className="bg-[#fdefee] w-full pb-10">
      <div
        className="bg-[#fdf8f4] w-[90%] rounded-2xl mx-auto -mt-10 md:-mt-16 px-4 md:px-8 xl:px-10 py-10 relative z-10 category-products-con"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        {/* choose category */}
        <div className="category">
          <h1>Category</h1>

          <div className="category-pick-con">
            <div className="category-line"></div>
            <div className="line">
              <div>Classic</div>
              <div>Gourmet</div>
              <div>Cookies</div>
              <div>Desserts</div>
            </div>
          </div>
        </div>

        {/* Products list */}
        <div className="products-con">
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </div>
    </div>
  );
}

export default ProductsContent;
