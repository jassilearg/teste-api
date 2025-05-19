describe('validar crud de loja', () => {
  it('deve adicionar um novo produto', () => {
    cy.adicionarProduto();
  });

  it('não deve adicionar produto', ( ) => {
    cy.adicionarProdutoInvalido();
  })

  it('deve listar todos os produtos cadastrados', () => {
    cy.listarProdutos();
  });

  it('deve deletar um elemento', () => {
    cy.deletarProduto();
  })

  it('deve atualizar um produto', () => {
    cy.atualizarProduto();
  });

  it('deve obter um produto', () => {
    cy.obterUmProduto();
  })
})