class MainPage
{
    elements =
    {
        loginBtn: () => cy.get('.HPHeaderLogin > a > img')
    }

    //FUNCTIONS
}

export const mainPage = new MainPage();