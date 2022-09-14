


const contenedorProductos = document.getElementById('contenedor-productos');
const buscador = document.getElementById('search')


buscador.addEventListener('input', ()=>{
    mostrarProductos(stockProductos.filter(item=> item.nombre.toUpperCase().includes( buscador.value.toUpperCase())))
})

mostrarProductos(stockProductos)

function mostrarProductos(array){
    contenedorProductos.innerHTML= ""
    
   array.forEach(item => {

       let div = document.createElement('div')
       div.classList.add('producto')
    div.innerHTML += `
                    <div class="card" >
                        <div class="card-image">
                            <img src=${item.img}>
                            <span class="card-title" id="${item.id}">${item.nombre}</span>
                            <a  id="agregar${item.id}" class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add_shopping_cart</i></a>
                        </div>
                        <div class="card-content">
                            <p>${item.desc}</p>
                            
                            <p> $${item.precio}</p>
                        </div>
                    </div>
    `
    contenedorProductos.appendChild(div)

        let nombreDetalle = document.getElementById(`${item.id}`)
        nombreDetalle.addEventListener('click',()=>{
            let guardarLS = stockProductos.find(elemento => elemento.id == item.id)
            localStorage.setItem('producto', JSON.stringify(guardarLS))
            
        })

        let btnAgregar = document.getElementById(`agregar${item.id}`)
        btnAgregar.addEventListener('click',()=>{
           agregarAlCarrito(item.id)
        })

   })
}

const sa = ()=> {
    let timerInterval
    Swal.fire({
      title: 'NOVEDAD:SALSA DE TOMATE ENVASADA',
      html: 'ESTE AVISO SE CERRARA EN <b></b>',
      timer: 5000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading()
        const b = Swal.getHtmlContainer().querySelector('b')
        timerInterval = setInterval(() => {
          b.textContent = Swal.getTimerLeft()
        }, 100)
      },
      willClose: () => {
        clearInterval(timerInterval)
      }
    }).then((result) => {
      
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log('I was closed by the timer')
      }
    })
}
   sa ()

   const RetornocardContenido = (contenido)=> {
    const { id, titulo, poster} = content
    return 
        
    
   } 
   RetornocardContenido()



   function pedirDatosALSRV(){
    fetch('https://jsonplaceholder.typicode.com/todos/')
      .then(response => response.json())
      
      .then(json => console.log(json))
       .catch((Error)=>console.error ("error producido:",Error))
   }  
 
   pedirDatosALSRV()
 
 


   




