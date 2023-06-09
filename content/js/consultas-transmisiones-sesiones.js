// Tabla con las Tramisiones de las Sesiones en Vivo
$(document).ready(function() {

  $('#articulosTransmisionesSesiones').DataTable( {
      "ajax": '/json/transmisiones-sesiones.json',
      "columns": [
          { "data": "date", "title": "Fecha" },
          { "data": "category", "title": "Sala" },
          { "data": "title", "title": "Vínculo",
              "fnCreatedCell": function (nTd, sData, oData, iRow, iCol)
              {
                  $(nTd).html("<a href='"+oData.url+"'>"+oData.title+"</a>");
              }
          }
      ],
      "pageLength": 10,
      "order": [[ 0, "desc" ]],
      "language": {
          "lengthMenu": "Mostrar _MENU_",
          "search": "Filtrar:",
          "zeroRecords": "No se encontraron registros",
          "info": "Página _PAGE_ de _PAGES_",
          "infoEmpty": "No hay registros",
          "infoFiltered": "(filtrados desde _MAX_ registros totales)",
          "oPaginate": {
              "sFirst": "Primero",
              "sLast": "Último",
              "sNext": "Siguiente",
              "sPrevious": "Anterior"
          }
      }
  } );

} );
