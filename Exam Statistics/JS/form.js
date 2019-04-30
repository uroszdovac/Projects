function collectData(){
    
    nameAndSurname = nameInput.value;
    nameAndSurnameArray = nameAndSurname.split(' ');
    subjectSelected = subjectSelect.value;
    gradeSelected = gradeInput.value;

    newStudent = new Student(nameAndSurnameArray[0], nameAndSurnameArray[1]);
    newSubject = new Subject(subjectSelected);
    newExam = new Exam(newSubject, newStudent, gradeSelected);

    subjectSelect.value = 'Web';
    gradeInput.value = '';
    nameInput.value = '';
    
}

function updateStatistic(){

    numOfPassedNumber = parseInt(numOfPassed.textContent);
    numOfFailedNumber = parseInt(numOfFailed.textContent);

    if(newExam.hasPassed()){
        totalNumOFStudents ++;
        numOfPassedNumber ++;
    }else{
        totalNumOFStudents ++;
        numOfFailedNumber ++;
    }

    addExam();
    
    
}

function addExam(){

    percentOfPassedNum = numOfPassedNumber / totalNumOFStudents * 100;
    percentOfPassed.textContent = parseInt(percentOfPassedNum) + '%';
    percentOfFailedNum = numOfFailedNumber / totalNumOFStudents * 100;
    percentOfFailed.textContent = parseInt(percentOfFailedNum) + '%';
    numOfFailed.textContent = numOfFailedNumber;
    numOfPassed.textContent = numOfPassedNumber;
    percentOfFailed.style.display = 'inline';
    percentOfPassed.style.display = 'inline';
    totalStudents.textContent = totalNumOFStudents;
}

function updateLists(){
    
    if(newExam.hasPassed()){
        var text = document.createTextNode(subjectSelected + ' - ' + newStudent.getStudentData());
        passedLi = document.createElement('li');
        passedLi.classList.add('passedLi');
        passedGrade = document.createElement('span');
        passedGrade.classList.add('passedGradeSpan');
        passedGradeInput = document.createTextNode(gradeSelected);
        passedGrade.appendChild(passedGradeInput);
        xSpanPassed = document.createElement('span');
        xSpanPassed.classList.add('xSpanPassed');
        xSpanPassedInput = document.createTextNode('X');
        xSpanPassed.appendChild(xSpanPassedInput); 
        passedLi.appendChild(text);
        passedLi.appendChild(xSpanPassed);
        passedLi.appendChild(passedGrade);
        passedList.appendChild(passedLi);
        
        xSpanPassed.addEventListener('click', function(){
            this.parentNode.remove();
            totalNumOFStudents --;
            numOfPassedNumber --;

            addExam();

            if (numOfPassedNumber == 0) {
                percentOfPassed.textContent =   '0%';
            }
            if(numOfFailedNumber == 0){
                percentOfFailed.textContent = '0%';
            }
        })
        
    }else{

        var text = document.createTextNode(subjectSelected + ' - ' + newStudent.getStudentData());
        failedLi = document.createElement('li');
        failedLi.classList.add('failedLi');
        failedGrade = document.createElement('span');
        failedGrade.classList.add('failedGradeSpan')
        failedGradeInput = document.createTextNode(gradeSelected);
        failedGrade.appendChild(failedGradeInput);
        xSpanFailed = document.createElement('span');
        xSpanFailed.classList.add('xSpanFailed');
        xSpanFailedInput = document.createTextNode('X');
        xSpanFailed.appendChild(xSpanFailedInput);
        failedLi.appendChild(text);
        failedLi.appendChild(xSpanFailed);
        failedLi.appendChild(failedGrade);
        failedList.appendChild(failedLi);

        xSpanFailed.addEventListener('click', function(){
            this.parentNode.remove();
            totalNumOFStudents --;
            numOfFailedNumber --;

            addExam();

            if(numOfFailedNumber == 0){
                percentOfFailed.textContent = '0%';
            }
            if (numOfPassedNumber == 0) {
                percentOfPassed.textContent =   '0%';
            }
        })
    }
}


addButton.addEventListener('click', function(){
    collectData();
    updateStatistic();
    updateLists();
})
