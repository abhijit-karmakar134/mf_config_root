import { registerApplication, start } from "single-spa";

// registerApplication({
//   name: "@single-spa/welcome",
//   app: () =>
//     System.import(
//       "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
//     ),
//   activeWhen: ["/"],
// });

registerApplication({
  name: "@@hrc/mf-common",
  app: () => System.import("@hrc/mf-common"),
  activeWhen: ["/"],
  customProps : {domElement: document.getElementById('nav-container-cls')}
});

registerApplication({
  name: "@hrc/mf-collections",
  app: () => System.import("@hrc/mf-collections"),
  activeWhen: ["/cls"],
  customProps : {domElement: document.getElementById('cls-page-1')}
});

registerApplication({
  name: "@hrc/mf-dms",
  app: () => System.import("@hrc/mf-dms"),
  activeWhen: ["/dms"],
  customProps : {domElement: document.getElementById('dms-page-2')}
});

registerApplication({
  name: "@app",
  app: () => System.import("@app"),
  activeWhen: ["/dms"],
  customProps : {domElement: document.getElementById('dms-page-2')}
});


start({
  urlRerouteOnly: true,
});
