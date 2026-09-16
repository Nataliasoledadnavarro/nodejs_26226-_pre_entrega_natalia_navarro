# Pre-Entrega Node.js: Gestión de productos

Programa de línea de comandos desarrollado para la pre-entrega del proyecto de Node.js. La aplicación permitirá consultar, crear y eliminar productos utilizando la API de [FakeStore](https://fakestoreapi.com/docs).

## Requisitos

- Node.js instalado.
- npm instalado.
- Acceso a Internet para realizar las peticiones a FakeStore API.

## Instalación

Clonar el repositorio y ubicarse en su directorio:

```bash
git clone https://github.com/Nataliasoledadnavarro/nodejs_26226-_pre_entrega_natalia_navarro.git
cd nodejs_26226-_pre_entrega_natalia_navarro
```

Actualmente el proyecto no utiliza dependencias externas. Para iniciar el programa:

```bash
npm run start
```

## Comandos disponibles

La aplicación recibirá la acción y el recurso mediante argumentos de la terminal:

```bash
npm run start GET products
npm run start GET products/<productId>
npm run start POST products <title> <price> <category>
npm run start DELETE products/<productId>
```

Ejemplos:

```bash
npm run start GET products
npm run start GET products/15
npm run start POST products T-Shirt-Rex 300 remeras
npm run start DELETE products/7
```

## Tecnologías y conceptos

- Node.js y npm.
- ESModules (`import` y `export`).
- `process.argv` para interpretar comandos de la terminal.
- `fetch` y funciones asíncronas para comunicarse con la API.
- Destructuring, spread, métodos de arrays y métodos de strings.

## Estado del proyecto

La configuración inicial está completa. La próxima etapa es implementar en `index.js` el procesamiento de argumentos y las peticiones `GET`, `POST` y `DELETE` a FakeStore API.