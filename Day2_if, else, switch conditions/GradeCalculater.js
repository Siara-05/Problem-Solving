
// Given a student’s score (0–100), output the grade:  A → 90–100,,B → 80–89,C → 70–79,D → 60–69,F → below 60

function GradeCalculator(a) {

    if (a >= 90 ) {
        return "Grade A";
    }

    else if ( 89 > a >= 80) {
        return "Grade B";
    }

    else if ( 79 > a >= 70) {
        return "Grade C";
    }

    else if ( 69 > a >= 60){
        return "Grade D";
    }

    else {
        return "Fail";
    }
}

console.log(GradeCalculator(58));