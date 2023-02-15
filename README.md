# Projeto-Fiap-FrontEnd
Projeto para a prova de estágio fiap

A prova é uma simulação da criação de uma landpage para a uma grande empresa de varejo. Esse github é a parte do **Frontend** do site. Ele foi feito utilizando vscode, com as linguagens html, css e javascript. As bibliotecas usadas foram: bootstrap, jquery e datatable. Além disso, foi utilizada a extensão live server.

## Divisão do projeto
O projeto foi basicamente construído em 4 páginas diferentes, cada uma com seu css e javascript (exceto a Tela Adiministrativa):
* Tela Administrativa
* Cadastro
* Busca de usuários
* Atualizamento

A tela adiministrativa é basicamente a landpage do projeto. Ela possui dois botões, um para ir para a página de cadastro, e outro para a busca de usuários.

A página de cadastro é onde o usuário irá se cadastrar, colocando suas informações em um forms, que será registrado no banco de dados. Ela possui os campos Nome, Email, Telefone, Cpf e Data de Nascimento. Cada um possui suas restrições, por exemplo, o nome e email são obrigatórios para o usuário colocar, e é preciso digitar um número de telefone e cpf possíveis, entre algumas outras restrições. Após concluir o cadastro, irá mostrar uma mensagem de sucesso (ou o erro feito no cadastro) e é possivel utilizar um botão para voltar a tela adiministrativa.

A página de busca de usuários mostra uma tabela com todos os usuários e suas informações. Ela pode ser filtrada por cada campo do usuário, além disso há um filtro mais dinâmico feito já pela datatable, que consegue filtrar sem depender do campo. Na última coluna há dois botões, estes são os botões de atualizar e deletar um usuário com base em seu id. Ao clickar no de atualizar, você é levado a uma página para fazer as devidas alterações, e no de deletar o usuário, o usuário é deletado do banco de dados.

A página de atualizamento funciona de maneira bem similar a de cadastro, em que é digitado um formulário, mas agora para mudar as informações do usuário selecionado. Após concluir a atualização, é mostado uma mensagem de sucesso (ou erro). Em baixo a um botão de voltar para a página de busca.

## Como utilizar o projeto

1. Baixar esse projeto, e o [projeto do Backend](https://github.com/LuccaRh/Projeto-Fiap).
2. Baixar o vscode, visual studio 2022, sql server (microsoft managment studio 18), e as extensões e bibliotecas usadas (Dapper e MysqlClient para o visual studio 2022, e a extensão live server para o vscode)
3. Abrir o código backend pelo arquivo "ProjetoEstágioFiap.sln" no visual studio 2022
4. Abrir no vscode a pasta do projeto frontend
5. Abrir o microsoft managment studio 18, e rodar o arquivo "ProjetoVarejoFiap.sql" encontrado no projeto backend
6. Ir no visual studio 2022, no arquivo "BdConnection.cs" e mudar "Data Source" para o nome do do sql do seu computador
7. Rodar o código backend (irá abrir uma página do swagger, mas basta ignorar e deixar aberta)
8. Ir para o arquivo "TelaAdiministrativa.html" no vscode, e abrir um live server, clickando em "go live" na parte direita inferior da tela 
9. A página inicial do projeto irá abrir, assim sendo possível utilizar as funções explicadas acima.
