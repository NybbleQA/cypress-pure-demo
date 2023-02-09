import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { homePage } from "../../pages/HomePage";
import { loginModal } from "../../pages/LoginModal";
import { mainPage } from "../../pages/MainPage";

Given("user enters todo.ly main page", function()
{
    cy.visit('https://todo.ly');
})

When("user clicks [Login] button", function()
{
    mainPage.elements.loginBtn().click();
})

When("user types {string} in email textbox", function(string)
{
    loginModal.elements.emailTextbox().type(string)
})

When("user types '12345' in password textbox", function()
{
    loginModal.elements.passwordTextbox().type("12345");
})

When("user clicks [Login] button in login modal", function()
{
    loginModal.elements.loginBtn().click();
})

Then("user should be logged in", function()
{
    homePage.elements.logoutBtn().should('be.visible');
})
