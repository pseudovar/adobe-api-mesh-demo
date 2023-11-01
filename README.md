# Adobe API Mesh Demo

In this demo we provide a series of increasingly functional meshes to demonstrate how you would build and add functionality from different services.

We also provide a simple React frontend, that uses the Mesh as it's primary API.

## Documentation

This makes use of [Adobe API Mesh](https://experienceleague.adobe.com/docs/commerce-learn/tutorials/adobe-developer-app-builder/api-mesh/getting-started-api-mesh.html), to provide the API Gateway.

The mesh uses the following APIs as sources:

-   [Venia Demo Site](https://venia.magento.com/graphql)
-   [App Builder Demo Action](https://adobeioruntime.net/api/v1/web/283976-319tealcat-stage/default)
-   [Trevor Blades - Countries API](https://countries.trevorblades.com/)

## Run Local Frontend

### Clone the project

```bash
  git clone https://link-to-project
```

### Go to the project directory

```bash
  cd my-project
```

### Install dependencies

```bash
  npm install
```

### Start the server

```bash
  npm run dev
```

## Deploy Meshes

To deploy one of the included meshes, makes sure you have followed the [API Mesh setup instructions](https://developer.adobe.com/graphql-mesh-gateway/gateway/overview/).

### Create a mesh\*\*

```bash
  aio api-mesh create mesh-1.json
```

### Update a mesh\*\*

```bash
  aio api-mesh update mesh-2.json
```
