# Pre-Entrega Node.js

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

## Objetivo

- Consultar productos
- Consultar un producto por ID
- Crear un producto nuevo
- Eliminar un producto existente

La aplicación usa `process.argv`, `fetch` y `async/await` para interactuar con la API.