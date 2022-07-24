import './style.css'
import * as THREE from 'three'

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 500 );
camera.position.set( 0, 0, 100 );
camera.lookAt( 0, 0, 0 );

const scene = new THREE.Scene();

const material = new THREE.LineBasicMaterial( { color: 0x0000ff, opacity: 0.3 } );

const cube = new THREE.BoxGeometry( 20, 20, 20 );

cube

scene.add( new THREE.Mesh( cube, material ) );
renderer.render( scene, camera );

setInterval(() => {

  cube.rotateX(0.01);
  cube.rotateY(0.01);

  renderer.render( scene, camera );

}, 1000 / 60);