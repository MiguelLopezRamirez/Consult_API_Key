require('dotenv').config();
const Facturapi = require('facturapi').default;
const facturapi = new Facturapi(process.env.FACTURAPI_KEY);


async function updateCustomer() {
    try {
        const customer = await facturapi.customers.update(
            '67dc396a05fe87f1c99c4ee6',
            {
              email: 'jdoe@example.com',
              address: {
                street: 'Santa Monica Ave.',
                zip: '01234'
              },
            }
          );
      console.log('Customer created:', customer);
    } catch (error) {
      console.error('Error creating customer:', error);
    }
  }

updateCustomer();