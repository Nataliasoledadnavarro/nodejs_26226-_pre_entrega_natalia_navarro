# Pre-Entrega Node.js Natalia Navarro - Comisión 26226

Proyecto CLI para gestionar productos desde la terminal usando la API de FakeStore.

## Instalación

```bash
npm install
```

## Comandos

```bash
npm run start GET products
npm run start GET products/15
npm run start POST products T-Shirt-Rex 300 remeras
npm run start DELETE products/7
```

## Prueba rápida

Ejecutá este bloque en la terminal en este orden:

```bash
npm run start GET products
npm run start GET products/15
npm run start POST products T-Shirt-Rex 300 remeras
npm run start DELETE products/7
```

## Tests

Instalá las dependencias y ejecutá la suite de pruebas con:

```bash
npm install
npm test
```

Los tests validan las operaciones de consulta, creación y eliminación. Necesitan conexión a Internet porque interactúan con FakeStore API.

## Objetivo

- Consultar productos
- Consultar un producto por ID
- Crear un producto nuevo
- Eliminar un producto existente

La aplicación usa `process.argv`, `fetch` y `async/await` para interactuar con la API.