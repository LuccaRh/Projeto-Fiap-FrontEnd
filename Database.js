const form = document.querySelector('form');

$(document).ready(function () {
    let query = Querybuild();
    FiltrarAjax(query);
});

$(document).on('click', '.editar', function(){
    let id = $(this).data('id');
    window.location.href = "Atualizamento/Atualizamento.html?id="+id
})
$(document).on('click', '.excluir', function(){    
    let id = $(this).data('id');
     $.ajax({
            url: 'https://localhost:7189/Varejo/Exclusão?id='+id,
            type: 'DELETE',
            data: {id},
            success: function (data2) {
               alert("Excluido com sucesso!");
               location.reload();
            }
        });
})

form.addEventListener('submit', async (event) => {
    event.preventDefault();
    $('#myTable').DataTable().clear().destroy();
    let query = Querybuild();
    FiltrarAjax(query);

})

function FiltrarAjax(query){
    $.ajax({
        type: "GET",
        url: "https://localhost:7189/Varejo/Filtro?" + query,
        dataType: "json",
        success: function (data) {
            $('#myTable').DataTable({
                responsive: true,
                fixedColumns: true,
                "bPaginate": false,

                columnDefs: [
                    { width: 350, targets: 0},
                    { width: 250, targets: [1]},
                    { width: 200, targets: [2]},
                    { width: 150, targets: [3,4]}
                ],
                data: data,
                columns: [
                { data: "nome", className: "text-center" },
                { data: "email", className: "text-center" },
                { data: "telefone", className: "text-center" },
                { data: "cpf", className: "text-center" },
                { data: "dataDeNascimento", className: "text-center" },
                { data: "id", render: function(data) { 
                    return '<button class="btn btn-primary glyphicon glyphicon-pencil editar" data-id="'+data+'"></button> <button class="btn btn-danger glyphicon glyphicon-remove excluir" data-id="'+data+'"></button>'}},
                ]
            });
        },
        error: function (error) {
            console.log(error);
        }
    });
}

function Querybuild(){
    let query = "";
    let nome = document.getElementById('nome').value || null;
    let email = document.getElementById('email').value || null;
    let telefone = document.getElementById('telefone').value || null;
    let cpf = document.getElementById('cpf').value || null;
    let dataDeNascimento = document.getElementById('dataDeNascimento').value || null;
    const data = {nome, email, telefone, cpf, dataDeNascimento};
    query = Object.keys(data).map(function(key) {
        if (data[key] != null){
          return key + '=' + data[key]
        }
      }).join('&');
    console.log(query);
    return query;
}