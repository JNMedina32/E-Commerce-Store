import "../assets/styles/FilteredProducts.css";
import { productDB } from "../assets/helpers/productDB";
import { filterProducts } from "../assets/helpers/filterProducts";
import ProductCard from "../components/ProductCard";
import { useUser } from "../assets/helpers/userReducer";

export default function FilteredProducts() {
  const {
    state: { filter },
  } = useUser();

  const filteredProducts = filterProducts(productDB, filter);

  //conditonally renders if filteredProducts is empty or not
  return (
    <section className="filteredSection">
      {filteredProducts.length === 0 ? (
        <div className="noProducts">
          <h2>No Products Found</h2>
        </div>
      ) : (
        <div className="products">
          <h2 className="filterHeader"><span className="depTitle">Showing Results for: {filter}</span></h2>
          <div className="row produ">
            {filteredProducts.map((product) => (
              <div key={product.id} className="col-1 eaProduct">
                <ProductCard  product={product} />
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
