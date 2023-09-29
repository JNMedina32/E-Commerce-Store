export const filterProducts = (productDB, filter) => {
  // Check if productDB and filter are provided
  if (!productDB || !filter) {
    return [];
  }

  const filterValue = filter.toLowerCase();

  const filteredProducts = productDB.filter((product) => {
    const productName = product.name.toLowerCase();
    const productDescription = product.description.toLowerCase();
    const productDepartment = product.department.map((dep) =>
      dep.toLowerCase()
    );

    return (
      productName.includes(filterValue) ||
      productDescription.includes(filterValue) ||
      productDepartment.some(dep => dep.includes(filterValue))
    );
  });

  return filteredProducts;
};
