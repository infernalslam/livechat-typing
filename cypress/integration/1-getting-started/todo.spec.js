/// <reference types="cypress" />

describe('example to-do app', () => {
  it('test naja', () => {
    cy.visit('https://www.livechat.com/typing-speed-test')
    let len = 900
    let i = 0
    while (i < len) {
      cy.get('div[data-reactid=".0.1.1.0.0.$=11.0.$=10.1.1"] span').each(($el, index, $list) => {
        cy.get('[data-reactid=".0.1.1.0.0.$=11.0.$=10.1.0"]').type($el.text() + ' ')
      })
      i++
    }
  })
})
