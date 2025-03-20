require('dotenv').config(); 
const Facturapi = require('facturapi').default;
const facturapi = new Facturapi(process.env.FACTURAPI_KEY);


(async () => {
    try {
      const removedCustomer = await facturapi.customers.del('67dc38fbc3e708c2f4a25b22');
      console.log('Cliente eliminado:', removedCustomer);
    } catch (error) {
      console.error('Error al encontrar el cliente:', error);
    }
  })();