//Aurel, Chuck, Stefan


let score = 0; 
let quesNum = 0;
let userAnswers = [];
var questionSets = [{
	
	answerIt: "Which South Park character said this line? \'RESPECK MY AUTHORITAH!\' ",
	choices: ['Cartman', "Stan", "Mr. Hanky"],
	rightOne: 0, 
	},

{
	
	answerIt: " Who yell this line? 'KEEP SUMMER SAFE!' ",
	choices: ['Morty', 'Rick', 'Rick\'s Ship'],
	rightOne: 2, 
	},
	{
	
	answerIt: "What is the name of Randy Marsh\'s farm? ",
	choices: ['Skywalker Farm', 'Tegridy Farms', 'Greg Louganis Farm'],
	rightOne: 1, 
	},
	{
	
	answerIt: "What is the name of the sword in South Park\'s WoW episode?",
	choices: ['Sword of a Thousand Truths', 'Blazing Sword of Justice', 'Cartman\'s Fart Blade'],
	rightOne: 0, 
	},

	{
	
	answerIt: "In Office Space, what is milton\'s favorite item?",
	choices: ['Pimp of the Year Cup', 'Redline Stapler', 'Rubber Chicken'],
	rightOne: 1, 
	}



];


//submit button
 $('.submit').click(function() {
 	let radio = $('.radio')
 	let test = false;
    for (let i =0; i < radio.length; i++) {
 		if (radio[i].checked) {
 			test = true
 			userAnswers.push(i)
 			radio[i].checked = false
 		} 
 	}

 	//checks to see if an option has been chosen
	if (test == false) {
 		console.log('check item')
 		return;
 	}

 	//updates question number
 	if (quesNum < 4) {
 	quesNum++;
 	update();
 	}
 	else {
 		showScore();
 	}


})
//returns a new question --mechanics 
 const update = () => {
 	
// gives current question but generates next one as well 
 	let questionCurrent = $('#questions')

//binds current choice to help select and update 
 	let choiceCurrent = $('.spanChoice')


 	questionCurrent.text(questionSets[quesNum].answerIt)

 	for (i = 0; i < choiceCurrent.length; i++) {
 		$(choiceCurrent[i]).text(questionSets[quesNum].choices[i])
 	}
 	

 }

//show final score
const showScore = () => {
	for (i = 0; i < questionSets.length; i++) {
		if (userAnswers[i] == questionSets[i].rightOne) {
			score++;
		}
	}	
		if (score == 5) {
			$('.score').css('color', "green")
		} else if (score == 0){
			$('.score').css('color', "red")
		}
	$('.score').text('You score is ' + score + '/5')

}

//run to set the questions first time
 update();







