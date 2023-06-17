import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function FilterProducts(props) {
  const { setUserFilter, productCategories } = props;
  const [filterValue, setFilterValue] = useState("");

  const handleClick = (e) => {
    setFilterValue(e.target.value);
  };

  useEffect(() => {
    if (filterValue) {
      setUserFilter(filterValue);
    }
  }, [filterValue]);

  return (
    <div className="list-group list-group-horizontal proCats">
      {Array.from(productCategories).map((categoryName) => (
        <Link to="/">
          <button
            className="list-group-item list-group-item-action proCat"
            value={categoryName}
            onClick={handleClick}
          >
            {categoryName}
          </button>
        </Link>
      ))}
    </div>
  );
}
