import "../assets/styles/FilteredProducts.css";
import { useUser } from "../assets/helpers/userReducer";
import ProductCard from "./ProductCard";

export default function FilteredProducts() {
  const [state, dispatch] = useUser();

  return (
    <section className="filteredSection">
      <div className="fliteredHeader">
        <h5 className="col">Results for: {department}</h5>
      </div>
    </section>
  )
};