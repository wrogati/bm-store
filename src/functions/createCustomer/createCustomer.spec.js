const axios = require("axios");

test('Should create a new Customer', async () => {
    const response = await axios.post(`http://localhost:3000/dev/create-customer`, {
        firstName: "Olivia",
        lastName: "Watson",
        email: "olivia@mail.com"
    })

    expect(response.status).toBe(201)
});