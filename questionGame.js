/*  my array that my prompt will get questions from */
var qAndA = [
    ['How many states are there?', 50],
    ['How many planets are there?', 9],
    ['How many continents are there on earth?', 7]
    
];


var answer;
var question;
var response;
var questionCount = 0;




    for(var i=0; i < qAndA.length; i++){
   
     question = qAndA[i][0];
     answer = qAndA[i][1];
     response = parseInt(prompt(question));
     
    
      if(response === answer){
      
        questionCount++;
        document.getElementById('count').innerHTML = "You got" + " " + questionCount + " " + "questions right";
        document.getElementById('myP').innerHTML += question + '<br/>';
        
       
     }else if(response !== answer){
        
        document.getElementById('wrongQ').innerHTML = "Questions you got wrong";
        document.getElementById('p2').innerHTML += question + '<br/>';
     }
    
}
  
      





