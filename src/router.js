import Navigo from 'navigo';

const router = new Navigo('/');

export function setupRoutes(app) {
  router
    .on('/', () => {
      // Home page
    })
    .on('/model1', (match) => {
      app.view("/Unnamed-ZC151-04-Handle Assembly.gltf", "");
    })
    .on('/model2', (match) => {
      app.view("/HandleAssembly2.gltf", "");
    })
    .on('/model3', (match) => {
      app.view("/GearAssembly1.gltf", "");
    })
    .on('/model4', (match) => {
      app.view("/GearAssemblyF.gltf", "");
    })
    .on('/model5', (match) => {
      app.view("/GearAssembly3.gltf", "");
    })
    .resolve();
}