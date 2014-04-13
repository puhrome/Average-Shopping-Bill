/**
 *Average Shopping Bill Created by Phirom Yim on 4/12/14.
 */
var grocery = [5.55, 2.75, 8.96, 19.97, 4.24]; //declare list of grocery cost
grocery[0] = 5.55; //first item in list always starts with 0
grocery[1] = 2.75;// second item in list
grocery[2] = 8.96;// third item in list
grocery[3] = 19.97;//fourth item in list
grocery[4] = 4.24;//fifth item in list
//total of grocery bill is [0-4]
var total= grocery[0]+grocery[1]+grocery[2]+grocery[3]+grocery[4]; //declaring array list
console.log(total);//print
//total of grocery bill divided by the number of items in the list is equal to the average
var average = total/5;//declaring expression
console.log(average);//print
