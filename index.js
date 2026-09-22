const [, , method, resource] = process.argv;

if (!method || !resource) {
  console.log("Uso: npm run start <METHOD> <RESOURCE>");
} else {
  console.log(`Método: ${method}`);
  console.log(`Recurso: ${resource}`);
}
