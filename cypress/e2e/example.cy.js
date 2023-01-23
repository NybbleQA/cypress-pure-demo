describe('template spec for a login in todo.ly', () => {
    it('login successful', () => {
      //  FIRST/SETUP ACTIONS - (GIVEN)
      cy.visit('https://todo.ly')
      //  ACTIONS OVER PAGE ELEMENTS - (WHEN)
      cy.get('.HPHeaderLogin > a > img').click()
      cy.get('#ctl00_MainContent_LoginControl1_TextBoxEmail').type("fhr1@fhr1.com")
      cy.get('#ctl00_MainContent_LoginControl1_TextBoxPassword').type("12345")
      cy.get('#ctl00_MainContent_LoginControl1_ButtonLogin').click()
      //  ASSERTION/S (THEN)
      cy.get('#ctl00_HeaderTopControl1_LinkButtonLogout').should('be.visible')
      
    })
})

describe('scenario description', () => 
{
    it('expected result', () =>
    {
        cy.visit('https://todo.ly')
        cy.get('.HPHeaderLogin > a > img').click()
    })

})