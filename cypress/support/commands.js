const URL = Cypress.env('API_URL');

Cypress.Commands.add('adicionarProduto', () => {
  cy.request({
    method: 'POST',
    url: URL + '/products',
    body: 
    {
      "id": 0,
      "title": "lavadora",
      "price": 2999.99,
      "description": "máquina de lavar",
      "category": "eletrodomésticos",
      "image": "https://t62533.vteximg.com.br/arquivos/ids/942414-1000-1000/228477-1600-auto.jpg?v=638220067960830000"
    }
  }).then((response) => {
    expect(response.status).to.equal(201);
  })
});

Cypress.Commands.add('adicionarProdutoInvalido', () => {
  cy.request({
    method: 'POST',
    url: URL + '/products',
    body:{}
  }).then((response) => {
    expect(response.status).to.equal(400);
  })
})

Cypress.Commands.add('listarProdutos', () => {
  cy.request({
    method: 'GET',
    url: URL + '/products',
  }).then((response) => {
    expect(response.status).to.equal(200);
    cy.log(JSON.stringify(response.body));
  })
})

Cypress.Commands.add('deletarProduto', () => {
  cy.request({
    method: 'DELETE',
    url: URL + `/products/${1}`,
  }).then((response) => {
    expect(response.status).to.equal(200);
  });
});

Cypress.Commands.add('atualizarProduto', () => {
  cy.request({
    method: 'PUT',
    url: URL + `/products/${1}`,
    body:
    {
      "id": 0,
      "title": "Máquina de lavar",
      "price": 1999.99,
      "description": "Novo modelo de máquina de lavar",
      "category": "string",
      "image": "https://t62533.vteximg.com.br/arquivos/ids/942414-1000-1000/228477-1600-auto.jpg?v=638220067960830000"
    }
  }).then((response) => {
    expect(response.status).to.equal(200);
  })
});

Cypress.Commands.add('obterUmProduto', () => {
  cy.request({
    method:'GET',
    url: URL + `/products/${1}`
  }).then((response) => {
    expect(response.status).to.equal(200);
    cy.log(JSON.stringify(response.body));
  })
});