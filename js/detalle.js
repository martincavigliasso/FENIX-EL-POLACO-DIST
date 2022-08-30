const contenedorDetalle = document.getElementById('contenedor-detalle')

let obj = JSON.parse(localStorage.getItem('producto'))
mostrarDetalle(obj)
function mostrarDetalle(obj) {
    contenedorDetalle.innerHTML= `<div class="container py-md-5">
                                    <div class="left-ads-display wthree">
                                        <div class="row">
                                            <div class="desc1-left col-md-6">
                                                <img src="${obj.img}" class="img-fluid" alt="">
                                            </div>
                                            <div class="desc1-right col-md-6 pl-lg-3">
                                                <h3>${obj.nombre}.</h3>
                                                <h5>$${obj.precio}<span> $${obj.precio + 200}</span> </h5>
                                                <div class="available mt-3">
                                                   
                                                    <p>${obj.desc}</p>
                                                </div>
                                                <div class="share-desc mt-5">
                                                    <div class="share text-left">
                                                        <h4>Share Product :</h4>
                                                        <div class="social-ficons mt-4">
                                                            <ul>
                                                                <li><a href="#"><span class="fa fa-facebook"></span> Facebook</a></li>
                                                                <li><a href="#"><span class="fa fa-twitter"></span> Twitter</a></li>
                                                                <li><a href="#"><span class="fa fa-google"></span>Google</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div class="clearfix"></div>
                                                </div>
                                                </div>
                                                <button class="btn shop" id="${obj.id}">Comprar</button>


                                        </div>
                                        <div class="row sub-para-w3pvt my-5">

                                            <h3 class="shop-sing"></h3>
                                            <p></p>
                                            <p class="mt-3 italic-blue"></p>
                                            <p class="mt-3"></p>
                                        </div>
                                    </div>
                                </div>`

    let btnAgregar = document.getElementById(`${obj.id}`)
    btnAgregar.addEventListener('click',()=>{
        agregarAlCarrito(obj.id)
    })
    
}