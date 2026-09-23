const [, , method, resource] = process.argv;

const API_URL = "https://fakestoreapi.com/products";

async function getProducts() {
  const response = await fetch(API_URL);
  const products = await response.json();
  
  console.log(`Total de productos ${products.length}:`);
  console.log(JSON.stringify(products, null, 2));
}

async function getProductById(productId) {
  const response = await fetch(`${API_URL}/${productId}`);
  const product = await response.json();

  console.log(`Detalle del producto ${product.title}:`);
  console.log(JSON.stringify(product, null, 2));
}

async function main() {
  if (!method || !resource) {
    console.log("Uso: npm run start <METHOD> <RESOURCE>");
    return;
  }

  try {
    if (method.toUpperCase() === "GET" && resource === "products") {
      await getProducts();
      return;
    }

    if (method.toUpperCase() === "GET" && resource.startsWith("products/")) {
      const productId = resource.split("/")[1];
      await getProductById(productId);
      return;
    }

    console.log("Formato inválido. Probá: GET products o GET products/15");
  } catch (error) {
    console.log("Error:", error.message);
  }
}

main();
