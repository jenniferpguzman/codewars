//Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.
// For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.
const quarterOf = (month) => {
if (month < 4){
    return 1;
} else if (month < 7){
    return 2;
} else if (month < 10){
    return 3;
} else if ( month < 13){
    return 4;
}
}

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