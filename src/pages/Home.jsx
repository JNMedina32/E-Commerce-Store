import { departmentDB, productDB } from "../assets/helpers/productDB";
import ProductCard from "../components/ProductCard";
import { FlashSaleCarousel } from "../components/FlashSaleCarousel";
import "../assets/styles/Home.css";
import { Link } from "react-router-dom";
import Modal from "../components/Modal";
import { useEffect, useState, useRef } from "react";
import { scrollRow } from "../assets/helpers/scrollRow";
import { useUser } from "../assets/helpers/userReducer";

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [scrollProducts, setScrollProducts] = useState({});
  const [flashSaleProducts, setFlashSaleProducts] = useState([]);
  const maxProductsPerRow = 10;
  const departmentRef = useRef({});
  const { dispatch, state } = useUser();
  const { welcomeModal } = state;

  const handleFilter = (filter) => {
    dispatch({ type: "FILTER", payload: filter });
  };

  useEffect(() => {
    setTimeout(() => setShowModal(true), 1000);
    const selectRandomProducts = () => {
      let randomIndexes = [];
      while (randomIndexes.length < 2) {
        let r = Math.floor(Math.random() * productDB.length);
        if (randomIndexes.indexOf(r) === -1) randomIndexes.push(r);
      }
      const selectedProducts = randomIndexes.map((index) => {
        return {
          ...productDB[index],
          price: productDB[index].price,
          salePrice: productDB[index].price * 0.8,
        }; // 20% discount
      });
      setFlashSaleProducts(selectedProducts);
    };
    selectRandomProducts();
    console.log("inside of useEffect", flashSaleProducts);
  }, []);

  console.log("outside of useEffect", flashSaleProducts);

  return (
    <section className="homeSection">
      {welcomeModal && (
        <Modal
          title="Welcome!"
          text="This site is meant to replicate a real e-commerce site. You can login, put items in a cart, and simulate checking out. The products on this site are not real, and are only meant to demonstrate the functionality of this site. Refreshing or leaving the page will 'empty cart' & 'log you out'. Thank you for visiting!"
          onClose={() => dispatch({ type: "SET_MODAL" })}
        />
      )}

      {departmentDB.map((department) => (
        <div key={department} className="departmentRow" id={department}>
          <div className="rowHeader">
            <h5 className="col-1 depTitle">{department}</h5>
            <Link to="/FilteredProducts">
              <button
                className="col viewAll"
                onClick={() => handleFilter(department)}
              >
                View All
              </button>
            </Link>
          </div>
          <div
            className="productRow"
            ref={(el) => (departmentRef.current[department] = el)}
          >
            <div
              className="arrowBtn left"
              style={{
                display: scrollProducts[`${department}-left`] ? "flex" : "none",
              }}
              onClick={() =>
                scrollRow(
                  "left",
                  department,
                  departmentRef,
                  scrollProducts,
                  setScrollProducts
                )
              }
            >
              <p>{"<"}</p>
            </div>
            {productDB
              .filter(
                (product) =>
                  product.department.includes(department) &&
                  product.salePrice === undefined
              )
              .slice(0, maxProductsPerRow)
              .map((product) => (
                <div className="productCol" key={product.id}>
                  <ProductCard product={product} />
                </div>
              ))}
            <div
              className="arrowBtn right"
              style={{
                display:
                  scrollProducts[`${department}-right`] !== false
                    ? "flex"
                    : "none",
              }}
              onClick={() =>
                scrollRow(
                  "right",
                  department,
                  departmentRef,
                  scrollProducts,
                  setScrollProducts
                )
              }
            >
              <p>{">"}</p>
            </div>
          </div>
        </div>
      ))}

    </section>
  );
}
