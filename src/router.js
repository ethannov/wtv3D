import Navigo from 'navigo';

const router = new Navigo('/');

export function setupRoutes(app) {
  router
    .on('/', () => {
      // Home page
    })
    .on('/model1', (match) => {
      // Load specific model
      console.log("model1");
      app.view("/Unnamed-ZC151-04-Handle Assembly.gltf", "");
    })
    .on('/model2', (match) => {
      // Load specific model
      app.view("/HandleAssembly2.gltf", "");
    })
    .on('/model3', (match) => {
      // Load specific model
      app.view("/GearAssembly1.gltf", "");
    })
    .on('/model4', (match) => {
      // Load specific model
      app.view("/GearAssemblyF.gltf", "");
    })
    .on('/model5', (match) => {
      // Load specific model
      app.view("/GearAssembly3.gltf", "");
    })
    .resolve();
}