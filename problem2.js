//Finish the uefaEuro2016() function so it return string just like in the examples below:

uefaEuro2016(['Germany', 'Ukraine'],[2, 0]) // "At match Germany - Ukraine, Germany won!"
uefaEuro2016(['Belgium', 'Italy'],[0, 2]) // "At match Belgium - Italy, Italy won!"
uefaEuro2016(['Portugal', 'Iceland'],[1, 1]) // "At match Portugal - Iceland, teams played draw."
uefaEuro2016(['Portugal', 'Iceland'],[1, 1]) // "At match Portugal - Iceland, teams played 

//write a function called uefaEuro2016
//two seperate arrays
// need to turn it into a single string
// second statement I will need an if else statement

 function uefaEuro2016(teams , scores) {
    if (scores[0] < scores[1]) {
        return "At match " + teams[0] + " - " + teams[1] + ", " + teams[1] + " won!"
    } else if (scores[0] > scores[1]) {
        return "At match " + teams[0] + " - " + teams[1] + ", " + teams[0] + " won!" 
    } else if (scores[0] === scores[1]) {
        return "At match " + teams[0] + " - " + teams[1] + ", " + "teams played draw."
    }
}


//this problem was very difficult for me to solve. I did practice problems similar
//but I originally was confused if the information were arrays
// after I realized this is just like the first, writing an if else statement