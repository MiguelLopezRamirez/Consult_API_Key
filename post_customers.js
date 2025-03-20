require('dotenv').config(); 
const Facturapi = require('facturapi').default;
const facturapi = new Facturapi(process.env.FACTURAPI_KEY);
async function createCustomer() {
  try {
    const customer = await facturapi.customers.create({
      legal_name: 'Dunder Mifflin',
      email: 'email@example.com',
      tax_id: 'ABC101010111',
      tax_system: '601',
      address: {
        zip: '01234'
      }
    });
    console.log('Customer created:', customer);
  } catch (error) {
    console.error('Error creating customer:', error);
  }
}

createCustomer();