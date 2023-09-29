export const scrollRow = (
  direction,
  department,
  departmentRef,
  scrollProducts,
  setScrollProducts
) => {
  const row = departmentRef.current[department];
  const pixelsToMove = 200;

  const maxScrollLeft = row.scrollWidth - row.clientWidth;

  if (direction === "right") {
    row.scrollLeft += pixelsToMove;
    if (row.scrollLeft > 0) {
      setScrollProducts({
        ...scrollProducts,
        [`${department}-left`]: true,
      });
    }
    if (row.scrollLeft >= maxScrollLeft) {
      setScrollProducts({
        ...scrollProducts,
        [`${department}-right`]: false,
      });
    }
  } else if (direction === "left") {
    row.scrollLeft -= pixelsToMove;
    if (row.scrollLeft <= 0) {
      setScrollProducts({
        ...scrollProducts,
        [`${department}-left`]: false,
      });
    }
    if (row.scrollLeft < maxScrollLeft) {
      setScrollProducts({
        ...scrollProducts,
        [`${department}-right`]: true,
      });
    }
  }
};
