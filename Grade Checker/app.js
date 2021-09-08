let subject='';
let grade='';
let gradetext='';
function showGrade(form){
	grade=form.grade.value;
	subject=form.subject.value;

	if(grade==5.0){
		gradetext='A+';
	}
	else if(grade>4.0 && grade<5.0){
		gradetext='A';
	}
	else if(grade>3.5 && grade<4.0){
		gradetext='A-';
	}
	else if(grade>3.00 && grade<3.5){
		gradetext='B';
	}
	else if(grade>2.5 && grade<3.0){
		gradetext='c';
	}
	else{
		gradetext='F'

	}
	var el=document.getElementById('result');
	el.innerHTML='Your Subject: '+subject+' and Grade is '+gradetext;
}