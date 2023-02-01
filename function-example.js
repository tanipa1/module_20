function getAverage(assignment1, assignment2, assignment3){
    const totalMark = (assignment1 + assignment2 + assignment3);
    const average = totalMark / 3;
    return average;
}

var myMark = getAverage(60, 60, 58);
console.log(myMark);