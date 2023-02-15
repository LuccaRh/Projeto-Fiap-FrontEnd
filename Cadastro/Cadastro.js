const form = document.querySelector('form');
let dataDeNascimento = document.getElementById('dataDeNascimento').value = null;
form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const nome = document.getElementById('nome').value || null;
  const email = document.getElementById('email').value || null;
  const telefone = document.getElementById('telefone').value || null;
  const cpf = document.getElementById('cpf').value || null;
  dataDeNascimento = document.getElementById('dataDeNascimento').value || null;
  if (dataDeNascimento != null){
    let date = new Date(dataDeNascimento);
    dataDeNascimento = `${("0" + (date.getDate()+1)).slice(-2)}-${("0" + (date.getMonth() + 1)).slice(-2)}-${date.getFullYear()}`;
  }
  console.log(dataDeNascimento)
  const data = { nome, email, telefone, cpf, dataDeNascimento};
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  };

    await fetch('https://localhost:7189/Varejo/Cadastro', options).then(
    res=>{
      if(!res.ok) {
        return res.text().then(text => { throw new Error(text) })
       }
      else {
       document.querySelector("#error-message").textContent = "Usuário Cadastrado"
     }
}).catch(error=>{document.getElementById('error-message').innerHTML = error;})
  
});