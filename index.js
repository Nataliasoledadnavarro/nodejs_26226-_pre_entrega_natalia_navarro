const [, , method, resource, ...args] = process.argv;
const API_URL = "https://fakestoreapi.com/products";

async function getProducts() {
  const response = await fetch(API_URL);
  const products = await response.json();

  console.log(`Total de productos: ${products.length}`);
  console.log(JSON.stringify(products, null, 2));
}

async function getProductById(productId) {
  const response = await fetch(`${API_URL}/${productId}`);
  const product = await response.json();

  console.log(`Detalle del producto ${productId}:`);
  console.log(JSON.stringify(product, null, 2));
}

async function createProduct(title, price, category) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title,
      price: Number(price),
      category,
    }),
  });

  const product = await response.json();
  console.log(`Producto agregado con id: ${product.id}`);
  console.log(JSON.stringify(product, null, 2));
}

async function deleteProduct(productId) {
  const response = await fetch(`${API_URL}/${productId}`, {
    method: "DELETE",
  });

  const result = await response.json();
  console.log(`Producto eliminado: ${productId}`);
  console.log(JSON.stringify(result, null, 2));
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

    if (method.toUpperCase() === "POST" && resource === "products") {
      const [title, price, category] = args;

      if (!title || !price || !category) {
        console.log("Formato inválido. Probá: POST products <title> <price> <category>");
        return;
      }

      await createProduct(title, price, category);
      return;
    }

    if (method.toUpperCase() === "DELETE" && resource.startsWith("products/")) {
      const productId = resource.split("/")[1];
      await deleteProduct(productId);
      return;
    }

    console.log("Formato inválido. Probá: GET products, GET products/15, POST products <title> <price> <category> o DELETE products/<id>");
  } catch (error) {
    console.log("Error:", error.message);
  }
}

main();
