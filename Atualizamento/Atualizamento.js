const form = document.querySelector('form');

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
var id = urlParams.get('id')
console.log(id);

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const nome = document.getElementById('nome').value || null;
  const email = document.getElementById('email').value || null;
  const telefone = document.getElementById('telefone').value || null;
  const cpf = document.getElementById('cpf').value || null;
  const dataDeNascimento = document.getElementById('dataDeNascimento').value || null;

  const data = { id, nome, email, telefone, cpf, dataDeNascimento};
  const options = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  };
  console.log(data);
  
  await fetch('https://localhost:7189/Varejo/Atualizamento', options).then(
    res=>{
      if(!res.ok) {
        return res.text().then(text => { throw new Error(text) })
       }
      else {
       document.querySelector("#error-message").textContent = "Usuário Atualizado."
     }
}).catch(error=>{document.getElementById('error-message').innerHTML = error;})
});
