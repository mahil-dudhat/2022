const scene = new THREE.Scene()

const canvas = document.querySelector('.webgl')
console.log(canvas)

const geometry = new THREE.BoxGeometry(1,1,1)
const material = new THREE.MeshBasicMaterial({color : 0xff0000})
const mesh = new THREE.Mesh(geometry,material)
scene.add(mesh)

const sizes = { 
    width : window.innerWidth,
    height : window.innerHeight
}

window.addEventListener('resize', () =>
{
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    camera.aspect = sizes.width/sizes.height
    camera.updateProjectionMatrix()

    renderer.setSize(sizes.width, sizes.height)
})



const camera = new THREE.PerspectiveCamera(75, sizes.width  / sizes.height, 0.1 , 1000)
camera.position.z = 3
scene.add(camera)

const renderer = new THREE.WebGLRenderer({
  canvas : canvas
})
renderer.setSize(sizes.width, sizes.height)

const clock = new THREE.Clock()

const loop = () =>{

    const elapsedTime = clock.getElapsedTime()

    mesh.rotation.y = elapsedTime * Math.PI 
    
    renderer.render(scene,camera)

    window.requestAnimationFrame(loop) 

}

loop()


