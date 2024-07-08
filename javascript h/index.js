/* function currentdatetime(){
    let d = new Date();
    document.write(d)
}
currentdatetime();
//q2
let firstname = prompt("enter first name");
let lastname =  prompt("enter your last name");
function greets(firstname,lastname){
    document.write(" welcome " + " " + firstname + " " + lastname);
}
greets(firstname,lastname)
 //q3
 let x = +prompt("enter a num");
 let y = +prompt("enter a num");
 function sum (x,y){
    return x + y;
 }
 console.log(sum(x,y));
 //q4
let num1 = +prompt("");
let num2 = +prompt("");
let operator = prompt("");
function calculator(num1 , num2 , operator){
    if(operator === "+"){
        document.write( num1 + " " + operator + " " +num2 + " " + " = " + " " + (num1 + num2));
    }
    else if(operator === "-"){
        document.write( num1 + " " + operator + " " +num2 + " " + " = " + " " + (num1 - num2));
    }
    else if(operator === "*"){
        document.write( num1  + "  " + operator + " " +num2 + " " + " = " + " " + (num1 - num2));
    }
}
calculator(num1 , num2 , operator);
//q5
function sqaure(num){
    return num * num
}
console.log(sqaure(4));
//q9
function areaofrectangle(width , height){
    return " area of rectangle is : " + width * height
}
console.log(areaofrectangle(6,8));
console.log(areaofrectangle(9 , 6));
//q14
function circumference(radius){
    return " circumference is : " + " " + 2*3.41*radius
}
console.log(circumference(7 , 8));
console.log( circumference (6 , 7));
 
function area(radius){
    return " the area is " + " " + 3.41 *2 + radius
}
console.log(area(9 , 3));
console.log(area(8 , 6));
//q7
let start_number = +prompt("Enter a start number");
let end_number = +prompt("Enter a end number");
function count(start_number, end_number){
    if(start_number > end_number){
        for(let i = start_number; i>end_number; i--)
            document.write(i + "<br>")
        
    }
    else if(start_number <= end_number){
        for(let i = start_number; i<=end_number; i++)
            document.write(i + "<br>")
    }
    else if(start_number === end_number){
        document.write("both are equal")
    }
}
count(start_number,end_number); */





let a = 23;
let b = 45;
function sum(a , b){
    return a + b;
}
console.log(sum(a , b));

function even(number){
    return number % 2===0;
}
console.log(even(12));
//chapter 39 switch statments
let daysofweek = "tuesday";
switch (daysofweek) {
    case "monday":
        document.write("today is monday")
        break;
        case "tuesday":
        document.write("today is tuesday")
        break;
        case "wednesday":
        document.write("today is wednesday")
        break;
        case "thursday":
        document.write("today is thursday ")
        break;
        case "friday":
        document.write("today is friday")
        break;
        case "saturday":
        document.write("today is saturday")
        break;
        case "sunday":
        document.write("today is sunday")
         default:
            document.write("enter the correct day")
}
//chapter 40
let dayOfWk = 2;
switch(dayOfWk) {
     case 1 :  case 2 : 
      alert("Whoopee");
     break;
     case 3 : case 4 :
     alert("Whoopee");
     break;
     case 5 :
     alert("TGIF!");
     break;
     default :
     alert("Shoot me now!");
     }

//chapter 41
var i = 0;
while (i <= 3) {
 alert(i);
 i++;
 }
   
 //q1

 function getmonthname (){
    switch(getmonthname){
        case 1:
            return "January"
            break;
            case 2:
            return "feburary"
            break;
            case 3:
            return "march"
            break;
            case 4:
            return "april"
            break;
            case 5:
            return "may"
            break;
            case 6:
                return "June"
                break;
            case 7:
                return "July"
                break;
            case 8:
                return "august"
                break;
             case 9:
                return "september"
                break;
                case 10:
                    return "october"
                    break;  
                    case 11:
                        return "november"
                        break;
                        case 12:
                            return "december"
                            break;
                            default:
                                document.write("its not a right month")

 }
     }


function CalculateDiscount(producttype,price){
    let discount = 0;
    switch(producttype , price){
        case producttype = "electronic":
            discount = price*0.2;
            break;
            case producttype ="clothing":
                discount = price *0.9;
                break;
          case "book":
             discount = price * 0.7
             break;
             default:
                console.log("orignal price");
                break;
    }
let discountedprice = (price - discount).toFixed(2);
return discountedprice
}
console.log(CalculateDiscount("electronic" , 80));
console.log(CalculateDiscount("clothing" , 350));
console.log(CalculateDiscount("book" , 120));



















