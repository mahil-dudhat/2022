const scene = new THREE.Scene()

const canvas = document.querySelector('.webgl')
console.log(canvas)

const geometry = new THREE.BoxGeometry(3,3,3)

const material = new THREE.MeshBasicMaterial({color : 0x195190})

const axesHelper = new THREE.AxesHelper( 25 );
//scene.add( axesHelper );

const mesh = new THREE.Mesh(geometry,material)

const plane_geo = new THREE.PlaneGeometry( 250 , 100 )
const plane_mate = new THREE.MeshBasicMaterial( {color: 0x919398} );
const plane = new THREE.Mesh( plane_geo, plane_mate );
plane.position.z =  -50
scene.add( plane );

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

//const controls = new OrbitControls( camera, renderer.domElement )

const camera = new THREE.PerspectiveCamera(75, sizes.width  / sizes.height, 0.1 , 1000)
camera.position.z = 10

scene.add(camera)

const renderer = new THREE.WebGLRenderer({
  canvas : canvas
})
renderer.setSize(sizes.width, sizes.height)

const clock = new THREE.Clock()

const loop = () =>{

    const elapsedTime = clock.getElapsedTime()*2
    
    if (elapsedTime < 8)  {
      mesh.position.x = -2 + elapsedTime
      mesh.position.y = -2 + (elapsedTime/4)
      mesh.position.z = 5 - elapsedTime
    }

    if (elapsedTime > 8 && elapsedTime<14)  {
        mesh.position.x = 14 - elapsedTime 
    }

    if (elapsedTime > 5 && elapsedTime<10)  {
        // mesh.position.x = -2 + elapsedTime 
        // mesh.position.y = -2 + elapsedTime
        // mesh.position.z = 5 - elapsedTime
      }

   
     

    mesh.rotation.y = elapsedTime * Math.PI 

     
    
    
    renderer.render(scene,camera)

    window.requestAnimationFrame(loop) 

}

loop()


