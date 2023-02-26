const form = document.querySelector('form');

//Ao entrar na página, a tabela já é construida com todos os usuários
$(document).ready(function () {
    let query = Querybuild();
    FiltrarAjax(query);
});

//Ao clicar no botão, é levado para a página e atualizar, com o id na sua query
$(document).on('click', '.editar', function(){
    let id = $(this).data('id');
    window.location.href = "Atualizamento/Atualizamento.html?id="+id
})
//Ao clicar é feito o request para a api do backend, já com o id na sua query
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

//Procura pelo forms, datatable é removida, e outra é criada, com base nos valores do forms
form.addEventListener('submit', async (event) => {
    event.preventDefault();
    $('#myTable').DataTable().clear().destroy();
    let query = Querybuild();
    FiltrarAjax(query);

})

//Cria a Database utilizando o método filtro da api, na coluna id há dois botões, com a propriedade data-id com o 
//id do usuário
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

//Constroi a query baseada no form, se não for inserido nenhum valor (ex: ao entrar na pag), a query fica vazia
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
