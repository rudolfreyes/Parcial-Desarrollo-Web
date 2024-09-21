// Función para buscar datos de un municipio basado en su código
function Buscar() {
    const codigoMunicipio = document.getElementById("codigo").value;
 
    if (codigoMunicipio.length === 0) {
        Swal.fire({
            title: 'Error',
            text: 'Por favor ingrese un código de municipio.',
            icon: 'warning',
            confirmButtonText: 'Entendido'
        });
        return;
    }
    // Realiza la petición a la API
    fetch(`https://censopoblacion.azurewebsites.net/API/indicadores/2/${codigoMunicipio}`)
        .then(response => response.text()) // La API devuelve un string de un JSON
        .then(data => {
            try {
                // Primer paso: Convertir el string devuelto por la API en un objeto JSON
                const stringData = JSON.parse(data);
 
                // Si no se encuentra el municipio, la API debería retornar un JSON vacío o algún mensaje
                if (!stringData || Object.keys(stringData).length === 0) {
                    Swal.fire({
                        title: 'Municipio no encontrado',
                        text: 'No se encontró un municipio con ese código.',
                        icon: 'error',
                        confirmButtonText: 'Entendido'
                    });
                    return;
                }
 
                // Segundo paso: Si stringData es un string JSON, conviértelo nuevamente en objeto JSON
                const jsonData = (typeof stringData === 'string') ? JSON.parse(stringData) : stringData;
 
                // Asignar los valores a los elementos HTML
 // Asignar los valores a los elementos HTML
 document.getElementById("nombre").textContent = jsonData.nombre;
 document.getElementById("depto_id").textContent = jsonData.depto_id;
 document.getElementById("municipio_id").textContent = jsonData.municipio_id;
 document.getElementById("tipo_lugar").textContent = jsonData.tipo_lugar;
 document.getElementById("total_lugares").textContent = jsonData.total_lugares;
 document.getElementById("capital").textContent = jsonData.capital;
 document.getElementById("ext_territorial").textContent = jsonData.ext_territorial;
 document.getElementById("pob_total").textContent = jsonData.pob_total;
 document.getElementById("indice_masculinidad").textContent = jsonData.indice_masculinidad;
 document.getElementById("prom_hijos_mujer").textContent = jsonData.prom_hijos_mujer;
 document.getElementById("edad_promedio").textContent = jsonData.edad_promedio;
 document.getElementById("indice_dependencia").textContent = jsonData.indice_dependencia;
 document.getElementById("anios_prom_estudio").textContent = jsonData.anios_prom_estudio;
 document.getElementById("alfabetismo").textContent = jsonData.alfabetismo;
 document.getElementById("viviendas_part").textContent = jsonData.viviendas_part;
 document.getElementById("total_hogares").textContent = jsonData.total_hogares;
 document.getElementById("prom_personas_hogar").textContent = jsonData.prom_personas_hogar;
 document.getElementById("total_jefas_hogar").textContent = jsonData.total_jefas_hogar;
 document.getElementById("total_sexo_hombre").textContent = jsonData.total_sexo_hombre;
 document.getElementById("porc_sexo_hombre").textContent = jsonData.porc_sexo_hombre + "%";
 document.getElementById("total_sexo_mujeres").textContent = jsonData.total_sexo_mujeres;
 document.getElementById("porc_sexo_mujeres").textContent = jsonData.porc_sexo_mujeres + "%";
 document.getElementById("total_sector_urbano").textContent = jsonData.total_sector_urbano;
 document.getElementById("porc_sector_urbano").textContent = jsonData.porc_sector_urbano + "%";
 document.getElementById("total_sector_rural").textContent = jsonData.total_sector_rural;
 document.getElementById("porc_sector_rural").textContent = jsonData.porc_sector_rural + "%";
 document.getElementById("pob_edad_014").textContent = jsonData.pob_edad_014;
 document.getElementById("porc_edad_014").textContent = jsonData.porc_edad_014 + "%";
 document.getElementById("pob_edad_1564").textContent = jsonData.pob_edad_1564;
 document.getElementById("porc_edad_1564").textContent = jsonData.porc_edad_1564 + "%";
 document.getElementById("pob_edad_65").textContent = jsonData.pob_edad_65;
 document.getElementById("porc_edad_65").textContent = jsonData.porc_edad_65 + "%";
 document.getElementById("pob_pueblo_maya").textContent = jsonData.pob_pueblo_maya;
 document.getElementById("porc_pueblo_maya").textContent = jsonData.porc_pueblo_maya + "%";
 document.getElementById("pob_pueblo_garifuna").textContent = jsonData.pob_pueblo_garifuna;
 document.getElementById("porc_pueblo_garifuna").textContent = jsonData.porc_pueblo_garifuna + "%";
 document.getElementById("pob_pueblo_xinca").textContent = jsonData.pob_pueblo_xinca;
 document.getElementById("porc_pueblo_xinca").textContent = jsonData.porc_pueblo_xinca + "%";
 document.getElementById("pob_pueblo_afrodescendiente").textContent = jsonData.pob_pueblo_afrodescendiente;
 document.getElementById("porc_pueblo_afrodescendiente").textContent = jsonData.porc_pueblo_afrodescendiente + "%";
 document.getElementById("pob_pueblo_ladino").textContent = jsonData.pob_pueblo_ladino;
 document.getElementById("porc_pueblo_ladino").textContent = jsonData.porc_pueblo_ladino + "%";
 document.getElementById("pob_pueblo_extranjero").textContent = jsonData.pob_pueblo_extranjero;
 document.getElementById("porc_pueblo_extranjero").textContent = jsonData.porc_pueblo_extranjero + "%";
 
 
            } catch (error) {
                console.error("Error al parsear el JSON:", error);
                Swal.fire({
                    title: 'Error',
                    text: 'El código de municipio no existe',
                    icon: 'error',
                    confirmButtonText: 'Entendido'
                });
            }
        })
        .catch(error => {
            console.error("Error en la solicitud:", error);
            Swal.fire({
                title: 'Error',
                text: 'No se pudo obtener los datos del municipio. Por favor, inténtalo más tarde.',
                icon: 'error',
                confirmButtonText: 'Entendido'
            });
        });
 }