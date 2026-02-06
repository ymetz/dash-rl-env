import "bulma/css/bulma.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import * as THREE from 'three';
import * as MeshLineModule from "three.meshline";

async function start() {
  // Expose a mutable THREE object for legacy plugins/loaders that patch THREE.
  const legacyThree = { ...THREE };
  if (!legacyThree.Math && THREE.MathUtils) legacyThree.Math = THREE.MathUtils;

  window.THREE = legacyThree;
  globalThis.THREE = legacyThree;

  const meshLine = MeshLineModule.MeshLine || MeshLineModule.default?.MeshLine || MeshLineModule.default;
  const meshLineMaterial = MeshLineModule.MeshLineMaterial || MeshLineModule.default?.MeshLineMaterial;
  if (!meshLine || !meshLineMaterial) {
    throw new Error("Unable to initialize three.meshline exports");
  }

  window.MeshLine = meshLine;
  window.MeshLineMaterial = meshLineMaterial;
  globalThis.MeshLine = meshLine;
  globalThis.MeshLineMaterial = meshLineMaterial;

  await import('./Utils.js');
  await import('./Dash.js');
}

start().catch(error => {
  console.error('Failed to bootstrap app', error);
});
