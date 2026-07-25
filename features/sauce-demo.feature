Feature: Sauce demo functionality

    # Given - Prerequisite
    # When - action - eneter, click
    # And - repeated when then only can use of And
    # Then -  Verify

    Background:
        Given user open "https://www.saucedemo.com/" link

    Scenario Outline: User validates login functionality for <scenarioName>
        When user enter "<username>" in username box
        And user enter "<password>" in password box
        And user click on sign in button
        Then user verify error msg "<errormsg>"

        Examples:
            | scenarioName                  | username                  | password           | expectedResult                                                            |
            | valid login                   | standard_user             | secret_sauce       | Login Successful                                                          |
            | wrong credential              | abcd                      | xyz                | Epic sadface: Username and password do not match any user in this service |
            | no username                   |                           | secret_sauce       | Epic sadface: Username is required                                        |
            | no password                   | standard_user             |                    | Epic sadface: Password is required                                        |
            | username and password blank   |                           |                    | Epic sadface: Username is required                                        |
            | invalid username              | invalid_user              | secret_sauce       | Epic sadface: Username and password do not match any user in this service |
            | invalid password              | standard_user             | wrong_password     | Epic sadface: Username and password do not match any user in this service |
            | locked out user               | locked_out_user           | secret_sauce       | Epic sadface: Sorry, this user has been locked out.                       |
            | performance glitch user       | performance_glitch_user   | secret_sauce       | Login Successful                                                          |
            | problem user                  | problem_user              | secret_sauce       | Login Successful                                                          |
            | visual user                   | visual_user               | secret_sauce       | Login Successful                                                          |
            | username with leading spaces  | standard_user             | secret_sauce       | Epic sadface: Username and password do not match any user in this service |
            | username with trailing spaces | standard_user             | secret_sauce       | Epic sadface: Username and password do not match any user in this service |
            | password with leading spaces  | standard_user             | secret_sauce       | Epic sadface: Username and password do not match any user in this service |
            | password with trailing spaces | standard_user             | secret_sauce       | Epic sadface: Username and password do not match any user in this service |
            | username case mismatch        | Standard_User             | secret_sauce       | Epic sadface: Username and password do not match any user in this service |
            | password case mismatch        | standard_user             | Secret_Sauce       | Epic sadface: Username and password do not match any user in this service |
            | special characters username   | @#$%^                     | secret_sauce       | Epic sadface: Username and password do not match any user in this service |
            | special characters password   | standard_user             | @#$%^              | Epic sadface: Username and password do not match any user in this service |
            | sql injection                 | ' OR '1'='1               | test               | Epic sadface: Username and password do not match any user in this service |
            | xss script                    | <script>alert(1)</script> | secret_sauce       | Epic sadface: Username and password do not match any user in this service |
            | very long username            | aaaaaaaaaaaaaaaaaaaaaaaaa | secret_sauce       | Epic sadface: Username and password do not match any user in this service |
            | very long password            | standard_user             | aaaaaaaaaaaaaaaaaa | Epic sadface: Username and password do not match any user in this service |

    Scenario: verify user is able to login successfully
        // Given user open "https://www.saucedemo.com/" link
        When user enter "standard_user" in username box
        And user enter "secret_sauce" in password box
        And user click on sign in button
        Then user verify dashboard