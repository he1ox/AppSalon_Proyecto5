document.addEventListener('DOMContentLoaded', () => {
    iniciarApp();
});

function iniciarApp() {
    mostrarServicios();
}


async function mostrarServicios() {
    try {
        const resultado = await fetch('./servicios.json');
        const db = await resultado.json();
        const {servicios} = db;

        //Generar el html
        servicios.forEach(servicio => {
            const { id, nombre, precio } = servicio;

            //Dom scripting

            //Generar nombre servicio
            const nombreServicio = document.createElement('P');
            nombreServicio.textContent = nombre;
            nombreServicio.classList.add('nombre-servicio');

            //Generar precio servicio
            const precioServicio = document.createElement('P');
            precioServicio.textContent = `$. ${precio}`;
            precioServicio.classList.add('precio-servicio');  

            //Generar div contenedor de servicio

            const servicioDiv = document.createElement('DIV');
            
            servicioDiv.classList.add('servicio');

            //Inyectar precio & nombre al servicioDiv
            servicioDiv.appendChild(nombreServicio);
            servicioDiv.appendChild(precioServicio);

            //Inyectar en el html
            document.querySelector('#servicios').appendChild(servicioDiv);

        });
    }
    catch (error) {
        console.log(error);
    }
}