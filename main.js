import './style.css'

import * as THREE from 'three';
import { AmbientLight } from 'three';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
})

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
  canvas:document.querySelector('#bg'),
});

renderer.setPixelRatio( window.devicePixelRatio);
renderer.setSize( window.innerWidth, window.innerHeight);
camera.position.setZ(30);
renderer.render( scene, camera);

const geometry = new THREE.TorusGeometry(10, 3, 16, 100)
const material = new THREE.MeshStandardMaterial( { color: 0xFF6347} );
const torus = new THREE.Mesh( geometry, material );

scene.add(torus)
torus.position.setX(-20);

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(5,5,5)

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight)

const lightHelper = new THREE.PointLightHelper(pointLight)
const gridHelper = new THREE.GridHelper(200, 50);
scene.add(lightHelper, gridHelper)

const controls = new OrbitControls(camera, renderer.domElement);


function addStar(){
  const geometry = new THREE.SphereGeometry(0.25, 24, 24);
  const material = new THREE.MeshStandardMaterial( { color: 0xffffff })
  const star = new THREE.Mesh( geometry, material );

  const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread( 100 ) );

  star.position.set(x,y,z);
  scene.add(star)
}
 
Array(500).fill().forEach(addStar)

const waveTexture = new THREE.TextureLoader().load('background.jpg');
scene.background = waveTexture;

const JoshTexture = new THREE.TextureLoader().load('Capture.JPG')

const josh = new THREE.Mesh(
  new THREE.BoxGeometry(3, 3, 3), 
  new THREE.MeshBasicMaterial( {map: JoshTexture } )
);

scene.add(josh)
josh.position.setZ(-5);


const tennisBallTexture = new THREE.TextureLoader().load('tennis,png.png');
const fuzzTexture = new THREE.TextureLoader().load('texture.png');

const tennisBall = new THREE.Mesh(
  new THREE.SphereGeometry(3, 32, 32),
  new THREE.MeshStandardMaterial( {
    map: tennisBallTexture,
    normalMap: fuzzTexture
  } )
);


const pythonSquare = new THREE.Mesh(
  new THREE.BoxGeometry(3, 3, 3), 
  new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('python.png') } )
);


pythonSquare.position.setX(-3.3)
pythonSquare.position.setZ(2)


scene.add(pythonSquare)

const html5ball = new THREE.Mesh(
  new THREE.SphereGeometry(0.5, 32, 32),
  new THREE.MeshStandardMaterial( {
    map: new THREE.TextureLoader().load('html5.png')
  } )
);

html5ball.position.setZ(8.5)
html5ball.position.setX(1.5)
scene.add(html5ball)


const css3ball = new THREE.Mesh(
  new THREE.SphereGeometry(0.5, 32, 32),
  new THREE.MeshStandardMaterial( {
    map: new THREE.TextureLoader().load('css3logo.png')
  } )
);

css3ball.position.setZ(8.5)
css3ball.position.setY(1)
scene.add(css3ball)

const JSball = new THREE.Mesh(
  new THREE.SphereGeometry(0.5, 32, 32),
  new THREE.MeshStandardMaterial( {
    map: new THREE.TextureLoader().load('Javascript_Logo.png')
  } )
);

JSball.position.setZ(8.5)
JSball.position.setY(-1)
scene.add(JSball)

const cball = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1), 
  new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('c++.png') } )
);

cball.position.setZ(18)
cball.position.setX(-2.7)
cball.position.setY(-1)
scene.add(cball)


const gitball = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1), 
  new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('gitlogo.png') } )
);

gitball.position.setZ(18)
gitball.position.setX(-2.7)
gitball.position.setY(1)
scene.add(gitball)


const CMPSEball = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1), 
  new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('cmpselogo.png') } )
);

CMPSEball.position.setZ(26)
CMPSEball.position.setX(-5.5)
CMPSEball.position.setY(1)
scene.add(CMPSEball)


const ytSquare = new THREE.Mesh(
  new THREE.BoxGeometry(5, 3, 5), 
  new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('youtubelogo.png') } )
);


ytSquare.position.setX(-6)
ytSquare.position.setZ(35)
ytSquare.position.setY(0.5)
scene.add(ytSquare)


const ktpSquare = new THREE.Mesh(
  new THREE.BoxGeometry(3, 3, 3), 
  new THREE.MeshBasicMaterial( {map: JoshTexture } )
);


ktpSquare.position.setX(-2.3)
ktpSquare.position.setZ(41)
ktpSquare.position.setY(0)
scene.add(ktpSquare)

function moveCamera(){

  const t = document.body.getBoundingClientRect().top;

  josh.rotation.y += 0.01;
  josh.rotation.z += 0.01;

  pythonSquare.rotation.y -= 0.01;
  pythonSquare.rotation.z += 0.01;

  camera.position.z = t* -0.01;
  camera.position.x =t*-0.0002;
  camera.rotation.y = t*-0.0002;
}

document.body.onscroll = moveCamera

function animate(){
  requestAnimationFrame(animate);
  torus.rotation.x += 0.01;
  torus.rotation.y += 0.005;
  torus.rotation.z += 0.01;
  
  html5ball.rotation.x += 0.01;
  html5ball.rotation.y += 0.01;
  html5ball.rotation.z += 0.01;

  css3ball.rotation.x += 0.01;
  css3ball.rotation.y += 0.01;
  css3ball.rotation.z += 0.01;

  JSball.rotation.x += 0.01;
  JSball.rotation.y += 0.01;
  JSball.rotation.z += 0.01;

  gitball.rotation.x += 0.02;
  gitball.rotation.y += 0.005;
  gitball.rotation.z -= 0.01;


  cball.rotation.x += 0.01;
  cball.rotation.y += 0.002;
  cball.rotation.z -= 0.03;

  pythonSquare.rotation.x += 0.02;
  pythonSquare.rotation.y -= 0.01;
  pythonSquare.rotation.z += 0.05;

  ytSquare.rotation.x += 0.01;
  ytSquare.rotation.y += 0.003;
  ytSquare.rotation.z += 0.004;

  renderer.render(scene, camera);

}

animate()

