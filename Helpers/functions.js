export const filterByCategory = (arr, categoryId) => {
  return arr.filter((item) => item.categoryId === categoryId);
};
