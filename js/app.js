


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
      title: 'OFERTAS QUE VUELAN, APROVECHALAS',
      html: 'ESTE AVISO SE CERRARA EN <b></b> milliseconds.',
      timer: 2000,
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
 
   $.ajax({
    url: 'https://randomuser.me/api/',
    dataType: 'json',
    success: function(data) {
      console.log(data);
    }
  });
  "results" [
    {
      "gender": "female",
      "name": {
        "title": "Miss",
        "first": "Jennie",
        "last": "Nichols"
      },
      "location": {
        "street": {
          "number": 8929,
          "name": "Valwood Pkwy",
        },
        "city": "Billings",
        "state": "Michigan",
        "country": "United States",
        "postcode": "63104",
        "coordinates": {
          "latitude": "-69.8246",
          "longitude": "134.8719"
        },
        "timezone": {
          "offset": "+9:30",
          "description": "Adelaide, Darwin"
        }
      },
      "email": "jennie.nichols@example.com",
      "login": {
        "uuid": "7a0eed16-9430-4d68-901f-c0d4c1c3bf00",
        "username": "yellowpeacock117",
        "password": "addison",
        "salt": "sld1yGtd",
        "md5": "ab54ac4c0be9480ae8fa5e9e2a5196a3",
        "sha1": "edcf2ce613cbdea349133c52dc2f3b83168dc51b",
        "sha256": "48df5229235ada28389b91e60a935e4f9b73eb4bdb855ef9258a1751f10bdc5d"
      },
      "dob": {
        "date": "1992-03-08T15:13:16.688Z",
        "age": 30
      },
      "registered": {
        "date": "2007-07-09T05:51:59.390Z",
        "age": 14
      },
      "phone": "(272) 790-0888",
      "cell": "(489) 330-2385",
      "id": {
        "name": "SSN",
        "value": "405-88-3636"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/75.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/75.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/75.jpg"
      },
      "nat": "US"
    }
  ] 

   




