function validateProductData(name, price) {
  if (!inputIsValid(name, price)) {
    throw new Error(
      "Invalid input - product was not created."
    );
  }
}

function isEmpty(value) {
  return !value || value.trim() === "";
}

function hasMinValue(value, minValue) {
  return value < minValue;
}

function inputIsValid(name, price) {
  return !isEmpty(name) && hasMinValue(price, 0);
}

function addProduct(name, price) {
  if (
    !name ||
    name.trim() === "" ||
    !price ||
    price < 0
  ) {
    console.log(
      "Invalid input - product was not created."
    );
    return;
  }

  const product = {
    id: name + "_" + Math.random().toString(),
    name: name,
    price: price,
  };

  database.insert("products", product);
  return product;
}

describe(function () {
  it("should create a product for valid names and prices", function () {
    const createdProduct = addProduct(
      "Carpet",
      19
    );
    expect(createdProduct).not.toBeUndefined();
  });
  it("should generate a product id that contains the product name", function () {
    const createdProduct = addProduct("Book", 19);
    expect(createdProduct.id).stringContaining(
      "Book"
    );
  });
});
