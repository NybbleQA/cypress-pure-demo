Feature: Login Suite

    Feature Description

Background: 

Scenario: Successful Login in todo.y

    Given user enters todo.ly
    When user clicks [Login] button
    And user types "fhr1@fhr1.com" in login modal email textbox
    And user types "12345" in login modal password textbox
    And user clicks [Login] button in login modal
    Then user should be logged in 