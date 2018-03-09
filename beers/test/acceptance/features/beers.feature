Feature: Beers
  I want to test the beers page application

  Scenario: Load three beers in the list
    Given user is on the Beers screen
    Then the first beer text is "Amstel (5%) beer_01"

  Scenario: Add beers in the list
    Given user is on the Beers screen
    When the user add a new name "Cruzcampo" and graduation "3,5"
    And the user send the form
    Then the first beer of the list is "Cruzcampo (3,5%) beer_04"

  Scenario: Remove beers from the list
    Given user is on the Beers screen
    When the user press remove button from the first beer
    And accept modal dialog with question message
    Then the first beer of the list is "Mahoo (3%) beer_02"
