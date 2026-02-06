import * as THREE from 'three';

function loadScript(src) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = src;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error(`Failed to load script: ${src}`));
    document.head.appendChild(script);
  });
}

async function start() {
  // Expose a mutable THREE object for legacy plugins/loaders that patch THREE.
  const legacyThree = { ...THREE };
  if (!legacyThree.Math && THREE.MathUtils) legacyThree.Math = THREE.MathUtils;

  window.THREE = legacyThree;
  globalThis.THREE = legacyThree;

  // Legacy meshline plugin expects a global THREE and exports MeshLine globals.
  await loadScript('/vendor/THREE.MeshLine.js');

  await import('./Utils.js');
  await import('./Dash.js');
}

start().catch(error => {
  console.error('Failed to bootstrap app', error);
});
