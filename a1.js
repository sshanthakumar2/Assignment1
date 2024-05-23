/*********************************************************************************
*  WEB700 – Assignment 1
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: Sampavi Shanthakumar 
*  Student ID: 147633234 
*  Date: 23rd May 2024
*
********************************************************************************/ 


//Declaring the function named utility to generate a random integer 
function utility(max) {
    return Math.floor(Math.random() * max);
  }

//Declaring the variables
var serverVerbs = ["GET","GET","GET","POST","GET","POST"];
var serverPaths = ["/","/about","/contact","/login","/panel","/logout"];
var serverResponses = ["Welcome to WEB700 Assignment 1","This course name is WEB700. This assignment was prepared by Sampavi Shanthakumar","sshanthakumar2@myseneca.ca Sampavi Shanthakumar","Hello, User Logged In","Main Panel","Logout Complete. Goodbye"];

//Declaring the function named httpRequest (web server simulator)
function httpRequest(httpVerb,path){
    for(var i=0; i < serverPaths.length; i++){
        if (serverVerbs[i] == httpVerb && serverPaths[i] == path){
            return "200: " + serverResponses[i];
        }
    }
    return "404: Unable to process " + httpVerb + "request for " + path;
}

//Manually Testing the "httpRequest" Function (web server simulator)
console.log(httpRequest("GET", "/"));
console.log(httpRequest("GET", "/about")); 
console.log(httpRequest("PUT", "/")); 

//Declaring the function named automateTests
function automateTests(){
    var testVerbs = ["GET","POST"];
    var testPaths = ["/","/about","/contact","/login","/panel","/logout","/randomPath1","/randomPath2"];
    function randomRequest(){
        var randVerb = testVerbs[utility(testVerbs.length)];
        var randPath = testPaths[utility(testPaths.length)];

        //Print the httpRequest result
        console.log(httpRequest(randVerb,randPath));
    }
    //Execute the randamRequest function repeatedly in every 1 second
    setInterval(randomRequest, 1000);
}

//Invoke the automateTests Function for automate testing
automateTests();
