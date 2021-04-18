let listaDePessoasAprovadas = [
  'ada.lovelace@example.com',
  'marie.curie@example.com',
  'margaret.hamilton@example.com',
  'alan.turing@example.com',
];

  const enviarEmail = (objetoEmail) => {
    console.log(`Email para ${objetoEmail.email} com a nota ${objetoEmail.nota} enviado com sucesso!`);
  };

  let listaDeEmails;
// map serve para manipular Array, é util para quando você quer trocar uma variavel, mudar a propriedade de um objeto, criar uma regra, ele verifica uma lista e  te retorna uma nova
  listaDeEmails = listaDePessoasAprovadas.map((email) => {
    return { email: email, nota: 10};
  });

  // console.log(listaDeEmails);
//percorrer o novo array com forEach e para da um deles chamar a função enviarEmail.

listaDeEmails.forEach((objetoEmail) => enviarEmail(objetoEmail));