const filterFunction = (type, fun, arr, allItems, favItems) => {
  switch (type) {
    case "priceLow":
      const lowToHighSort = [...arr].sort((a, b) => a.price - b.price);
      fun((prev) => ({ ...prev, displayProduct: lowToHighSort }));
      break;

    case "priceHigh":
      const highToLowSort = [...arr].sort((a, b) => b.price - a.price);
      fun((prev) => ({ ...prev, displayProduct: highToLowSort }));
      break;

    case "rating":
      const ratingSort = [...arr].sort((a, b) => b.rating.rate - a.rating.rate);
      fun((prev) => ({ ...prev, displayProduct: ratingSort }));
      break;

    case "jewelery":
      const jwelerySort = [...allItems].filter((val) => {
        return val.category == "jewelery";
      });
      fun((prev) => ({ ...prev, displayProduct: jwelerySort }));
      break;

    case "men's clothing":
      const mensClothing = [...allItems].filter((val) => {
        return val.category == "men's clothing";
      });
      fun((prev) => ({ ...prev, displayProduct: mensClothing }));
      break;

    case "all":
      fun((prev) => ({ ...prev, displayProduct: allItems }));
      break;

    case "favItems":
      fun((prev) => ({ ...prev, displayProduct: favItems }));
      break;
  }
};

export default filterFunction;
