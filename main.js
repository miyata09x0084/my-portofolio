  // Find the latest version by visiting https://cdn.skypack.dev/three.

  import * as THREE from 'https://cdn.skypack.dev/three@0.126.1';
  import * as dat from 'dat.gui';
  console.log(dat)

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    innerWidth/innerHeight,
    0.1,
    1000
  );
  const renderer = new THREE.WebGLRenderer(
  )

  renderer.setSize(innerWidth, innerHeight)
  renderer.setPixelRatio(devicePixelRatio)
  document.body.appendChild(renderer.domElement)

  camera.position.z = 5

  const planeGeometry = new THREE.PlaneGeometry(10, 10, 10, 10)
  console.log(planeGeometry);
  const planeMaterial = new THREE.MeshPhongMaterial({
    color: 0xcaca82,
    side: THREE.DoubleSide,
    flatShading: THREE.FlatShading
  })
  const planeMesh = new THREE.Mesh(planeGeometry, planeMaterial)
  const light = new THREE.DirectionalLight(0xffffff, 1)
  light.position.set(0, 0, 1)
  scene.add(light)

  // console.log()
  const {array} = planeMesh.geometry.attributes.position

  for (let i = 0; i  < array.length; i += 3) {
    const x = array[i]
    const y = array[i + 1]
    const z = array[i + 2]

    array[i + 2] = z + Math.random()
  }

  scene.add(planeMesh)

  function animate() {
    requestAnimationFrame(animate)
    renderer.render(scene, camera)
  }

  animate()