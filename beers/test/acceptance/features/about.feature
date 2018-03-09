Feature: About
  I want to load the about page application

  Scenario: About screen
    Given user is on the "About" screen
    When the title is "¿Qué es Lorem Ipsum?"
    Then the two first worlds is "Lorem Ipsum"
