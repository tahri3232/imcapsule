const productParamLength = (param, product) => {
  const productPram = param.split("_");

  const id = productPram[productPram.length - 1];

  const pageProduct = product?.allItems.filter((val) => {
    return id == val.id;
  });
  
  return pageProduct
};

export default productParamLength;
