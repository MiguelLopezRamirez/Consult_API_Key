const Facturapi = require("facturapi").default;
const facturapi = new Facturapi(
  "sk_test_3z1QJgmKyNX6jYpBloprp0694JEn7v59ZOV4WqaGk8"
);

async function getCustomerById() {
  try {
    const customer = await facturapi.customers.retrieve(
      "67dc3a62c3e708c2f4a2850e"
    );
    console.log(customer);
  } catch (error) {
    console.error("Error retrieving customer:", error.message);
    console.error("Full error object:", error); // Logs the full error for debugging
  }
}

getCustomerById();

