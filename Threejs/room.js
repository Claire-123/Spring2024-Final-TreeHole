import './style.css'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/Addons.js';
import { WheelAdaptor } from 'three-story-controls'
import gsap from 'gsap';
import { OrbitControls } from 'three/examples/jsm/Addons.js';
import { PI } from 'three/examples/jsm/nodes/Nodes.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 0.1, 100 );
const renderer = new THREE.WebGLRenderer({alpha: true});
camera.position.set(2, 0, -2)

const controls = new OrbitControls(camera, renderer.domElement)
controls.enableZoom = false;
controls.enablePan = false;
controls.autoRotate = false;
controls.minPolarAngle = Math.PI/9
controls.maxPolarAngle = Math.PI/6*5
controls.target.set(1.8, 0.2, 0.1)

scene.background = new THREE.Color(0x76a163)

let currentHoveredObject = null

const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2()
const direction = new THREE.Vector3(0, 0, -1);
raycaster.set(camera.position, direction.normalize());

const loader = new GLTFLoader();

let room;
let notebook;
let readingArea;
let mailbox;
let door;
const pointLight = addPointLight();
const ambLight = addAmbientLight();

window.onload =()=>{
	renderer.setSize( window.innerWidth, window.innerHeight );
	document.body.appendChild( renderer.domElement );
	room = loadRoom();
    notebook = loadNotebook();
    readingArea = loadReadingArea();
	mailbox = loadMailbox()
	door = loadDoor()
    scene.add(pointLight)
    scene.add(ambLight)
	animate()
    raycast()
    hidediv()
}

function animate(){
	requestAnimationFrame(animate)
	renderer.render( scene, camera );
}

function loadRoom(){
	loader.load('/room.glb', function ( gltf ) {
		gltf.scene.scale.set(2, 2, 2)
		scene.add(gltf.scene)
		room = gltf.scene
        room.userData.groupName = 'room'
	}, undefined, function ( error ) {
		console.error( error );
	} );
	return room
}

function loadNotebook(){
	loader.load('/notebook.glb', function ( gltf ) {
		gltf.scene.scale.set(2, 2, 2)
		scene.add(gltf.scene)
		notebook = gltf.scene
        notebook.userData.groupName = 'notebook'

	}, undefined, function ( error ) {
		console.error( error );
	} );
	return notebook
}

function loadMailbox(){
	loader.load('/mailbox.glb', function ( gltf ) {
		gltf.scene.scale.set(2, 2, 2)
		gltf.scene.position.set(-0.741, 0, -0.133)
		gltf.scene.rotation.x = Math.PI
		gltf.scene.rotation.y = Math.PI/2
		gltf.scene.rotation.z = Math.PI
		scene.add(gltf.scene)
		mailbox = gltf.scene
        mailbox.userData.groupName = 'mailbox'
	}, undefined, function ( error ) {
		console.error( error );
	} );
	return mailbox
}

function loadDoor(){
	loader.load('/door.glb', function ( gltf ) {
		gltf.scene.scale.set(2, 2, 2)
		scene.add(gltf.scene)
		door = gltf.scene
        door.userData.groupName = 'door'
	}, undefined, function ( error ) {
		console.error( error );
	} );
	return door
}

function loadReadingArea(){
	loader.load('/readingArea.glb', function ( gltf ) {
		gltf.scene.scale.set(2, 2, 2)
		scene.add(gltf.scene)
		readingArea = gltf.scene
        readingArea.userData.groupName = 'readingArea'
	}, undefined, function ( error ) {
		console.error( error );
	} );
	return readingArea
}

function addPointLight(){
	const light = new THREE.PointLight(0xdbc7a4, 10)
	light.position.set(0, 2, 0)
	return light
}

function addAmbientLight(){
    const light = new THREE.AmbientLight(0xfce9cf, 2)
    return light
}

function raycast(){
	window.addEventListener('click', ()=> {
		pointer.x = (event.clientX / window.innerWidth) * 2 - 1
		pointer.y = -(event.clientY / window.innerHeight) * 2 + 1
		raycaster.setFromCamera(pointer,camera) 
		const intersects = raycaster.intersectObjects(scene.children, true)
		for(let i = 0; i < intersects.length; i ++ ) {
			let object = intersects[i].object 
			while(object) {
				if (object.userData.groupName === 'notebook') {
					console.log('clicked on noteboook')					
                    var Post = document.getElementById('makePost');
                    if (Post.style.display === 'none') {
                        Post.style.display = 'block';
                    }
					break
				}
				if(object.userData.groupName === 'readingArea') {
                    console.log('clicked on reading area')
                    var All = document.getElementById('all-posts');
                    if (All.style.display === 'none') {
                        All.style.display = 'block';
                    } 
                    break
				}
				if(object.userData.groupName === 'mailbox') {
                    console.log('clicked on mailbox')
                    var mail = document.getElementById('comments');
                    if (mail.style.display === 'none') {
                        mail.style.display = 'block';
                    } 
                    break
				}
				if(object.userData.groupName === 'door') {
                    console.log('clicked on door')
					window.location.href = '/start'
                    break
				}
				object = object.parent
			}
		}
	})

	window.addEventListener('mousemove', (event) => {
		pointer.x = (event.clientX / window.innerWidth) * 2 - 1
		pointer.y = -(event.clientY / window.innerHeight) * 2 + 1

		raycaster.setFromCamera(pointer, camera)
		const intersects = raycaster.intersectObjects(scene.children, true)

		var indicatorPost = document.getElementById('post-indicate');

		if (intersects.length > 0) {
			const hoveredObject = intersects[0].object
			let notebookObject = null
			let readingAreaObj = null

			// Traverse the parent hierarchy to find the notebook object
			let object = hoveredObject
			while (object) {
				if (object.userData.groupName === 'notebook') {
					notebookObject = object
					break
				}
				else if (object.userData.groupName === 'readingArea'){
					readingAreaObj = object
					break
				}
				object = object.parent
			}

			if (notebookObject !== currentHoveredObject) {
				// Mouse entered a new notebook object
				if (currentHoveredObject) {
					indicatorPost.style.display = 'none'
					// Reset the appearance of the previously hovered notebook object
					currentHoveredObject.traverse((object) => {
						if (object.isMesh && object.material) {
							object.material.emissive = new THREE.Color(0x000000)
							object.material.emissiveIntensity = 1
						}
					})
				}

				currentHoveredObject = notebookObject

				// Set the appearance of the newly hovered notebook object
				if (notebookObject) {
                    // if (Post.style.display === 'none') {
                        indicatorPost.style.display = 'block';
                    // }
					notebookObject.traverse((object) => {
						if (object.isMesh && object.material) {
							object.material.emissive = new THREE.Color(0xffffff)
							object.material.emissiveIntensity = 0.3
						}
					})
				}
			}
		} else {
			// Mouse is not hovering over any object
			if (currentHoveredObject) {
				indicatorPost.style.display = 'none'
				// Reset the appearance of the previously hovered notebook object
				currentHoveredObject.traverse((object) => {
					if (object.isMesh && object.material) {
						object.material.emissive = new THREE.Color(0x000000)
						object.material.emissiveIntensity = 1
					}
				})

				currentHoveredObject = null
			}
		}
	})
}

function hidediv(){
	document.getElementById('post-cross').addEventListener('click', ()=>{
        var form = document.getElementById('makePost');
        console.log('post cross clicked')
        // console.log(form.style.display)
        if (form.style.display === 'block') {
            form.style.display = 'none';
        }
    })

	document.getElementById('all-cross').addEventListener('click', ()=>{
        var form = document.getElementById('all-posts');
        console.log('all cross clicked')
        if (form.style.display === 'block') {
            form.style.display = 'none';
        }
    })

	document.getElementById('mail-cross').addEventListener('click', ()=>{
        var form = document.getElementById('comments');
        console.log('comments cross clicked')
        if (form.style.display === 'block') {
            form.style.display = 'none';
        }
    })
}