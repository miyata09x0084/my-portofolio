  // Find the latest version by visiting https://cdn.skypack.dev/three.

  import * as THREE from 'https://cdn.skypack.dev/three@0.126.1';

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    innerWidth/innerHeight,
    0.1,
    1000
  );
	console.log(scene);