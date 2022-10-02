import axios from "axios";

test("Should create a new Product Movie for rent", async () => {
  const response = await axios.post(
    `http://localhost:3000/dev/create-product`,
    {
      title: "Independence Day",
      type: "MOVIE",
      typeOfSale: "rent",
      rentPrice: 2
    }
  );

  expect(response.status).toBe(201);

});

test("Should create a new Product Movie for sale", async () => {
  const response = await axios.post(
    `http://localhost:3000/dev/create-product`,
    {
      title: "Tropa de elite",
      type: "MOVIE",
      typeOfSale: "sale",
      salePrice: 40
    }
  );

  expect(response.status).toBe(201);

});

test("Should create a new Product Movie for sale and rent", async () => {
  try {
    const response = await axios.post(
      `http://localhost:3000/dev/create-product`,
      {
        title: "Star Wars - O império contra ataca",
        type: "MOVIE",
        typeOfSale: "both",
        rentPrice: 10,
        salePrice: 60
      }
    );
  
    expect(response.status).toBe(201);
  } catch (error) {
    console.log('error', error.message)
  }

});

test("Should create a new Product Book", async () => {
  const response = await axios.post(
    `http://localhost:3000/dev/create-product`,
    {
      title: "Harry Potter",
      type: "BOOK",
      salePrice: 80
    }
  );

  expect(response.status).toBe(201);

});
