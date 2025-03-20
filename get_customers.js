require('dotenv').config(); 
const Facturapi = require('facturapi').default; 
const facturapi = new Facturapi(process.env.FACTURAPI_KEY); 


(async () => {
    try {
        const searchResult =  await facturapi.customers.list({
        });
        console.log('Clientes: ', searchResult);
    } catch (error) {
      console.error('Error al encontrar el cliente:', error);
    }
  })();