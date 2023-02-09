class LoginModal
{
    elements =
    {
        emailTextbox: () => cy.get('#ctl00_MainContent_LoginControl1_TextBoxEmail'),
        passwordTextbox: () => cy.get('#ctl00_MainContent_LoginControl1_TextBoxPassword'),
        loginBtn: () => cy.get('#ctl00_MainContent_LoginControl1_ButtonLogin')
    }

}

export const loginModal = new LoginModal();