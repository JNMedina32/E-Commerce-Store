import { departmentDB, productDB } from "../assets/helpers/productDB";
import ProductCard from "../components/ProductCard";
import "../assets/styles/Home.css";
import { Link } from "react-router-dom";
import Modal from "../components/Modal";
import { useEffect, useState } from "react";

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const maxProductsPerRow = 10;

  useEffect(() => {
    // setTimeout(() => setShowModal(true), 1000);
  }, []);
  return (
    <section className="homeSection">
      {showModal && (
        <Modal
          title="Welcome!"
          text="This site is meant to replicate a real e-commerce site. You can login, put items in a cart, and simulate checking out. The products on this site are not real, and are only meant to demonstrate the functionality of this site. Refreshing or leaving the page will 'empty cart' & 'log you out'. Thank you for visiting!"
          onClose={() => setShowModal(false)}
        />
      )}
      {departmentDB.map((department) => (
        <div key={department} className="departmentRow" id={department}>
          <div className="rowHeader">
            <h5 className="col">{department}</h5>
            <Link>
              <button className="col">View All</button>
            </Link>
          </div>
          <div className="productRow">
            {productDB
              .filter((product) => product.department.includes(department))
              .slice(0, maxProductsPerRow)
              .map((product) => (
                <div className="productCol" key={product.id}>
                  <ProductCard product={product} />
                </div>
              ))}
          </div>
        </div>
      ))}
    </section>
  );
}
