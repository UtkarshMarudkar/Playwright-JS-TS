
BDD - Behavior Driven Development

BDD is a extra layer which will have all readable steps


"" - parameter  - testdata - can be dynamic
'' - cant be change

BDD rules-

1 - create feature file
Gherkin language

--- mapping feature file to framework

Install package -  cucumber-js 

npm install @cucumber/cucumber

------

run cucumber 
--
npx cucumber-js  


--- hooks representation is in coading format-- hooks will execute before every scenario
--- Backgroud representation is in BDD format

// Main  IMP rule
// Cucumber has nothing to do with playwright
// you will not able to use fixture because its a concept of playwright not cucumber