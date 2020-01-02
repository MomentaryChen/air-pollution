Feature: Air pollution BDD test

    @Air-pollution-team
    Scenario: I can see Air pollution page and tab work properly
        Given I open Air pollution page
        When I click "Air Map" tab
        And I click "SAVE" buttom
        And I click "Air Compare" tab
        Then I click "Air Analyze" tab
