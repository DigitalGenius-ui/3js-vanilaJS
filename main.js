import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import "./style.css";
import * as THREE from "three"

const scene = new THREE.Scene()
scene.background = new THREE.Color("#F0F0F0")
const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000)

const geometry = new THREE.TorusGeometry(11,2, 5, 50)
const material = new THREE.MeshLambertMaterial({ color: "#468586", emissive:"#468586" })
const light = new THREE.DirectionalLight(0xffffff, 10)

const cube = new THREE.Mesh(geometry, material)

scene.add(light)
light.position.set(1, 1, 1)
scene.add(cube)
camera.position.z = 30

const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setAnimationLoop( animate );
document.body.appendChild(renderer.domElement)

const controls = new OrbitControls(camera, renderer.domElement)
controls.enableDamping = true
controls.enablePan = true
controls.enableZoom = true
controls.enableRotate=true

function animate() {
    renderer.render(scene, camera);
    controls.update()
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
}

window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
})