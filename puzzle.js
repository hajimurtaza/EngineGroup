// var inputString = "ABCD A---< B-->- C---> D---="
// .split(' ');
// console.log(output);

var solution = function(inputString){
    let parsedInput = parser(inputString);
    let parsedOuput = fillEqualSign(parsedInput)
    let partialOutput = fillInverse(parsedOuput);
    let filledOutput = fillRemaining(partialOutput);
    let finalOutput = unparse(filledOutput);
    return finalOutput;

}
var parser = function(inputString){
    //Sample Input = "ABCD A=--- B>--- C->-- D<---"
    let matrix = inputString.split(' ');
    //Remove initial alphabets
    matrix.splice(0,1);
    // console.log(matrix);

    matrix = matrix.map(x => x.substring(1).split(''));
    return matrix;
}

var fillEqualSign = function(matrix){
    for (let row=0; row< matrix.length; row++){
        matrix[row][row] = '=';
    }
    console.log(matrix);
    return matrix;
}

var fillInverse = function(matrix){
    const signs = ['<','>']
    for (let row = 0; row<matrix.length; row++){
        for(let column = 0; column<matrix[row].length; column++){
            
            if (signs.indexOf(matrix[row][column])!== -1){
                matrix[column][row] = (matrix[row][column]=== '>')? '<' : '>';
            }
        }
    }

    console.log(matrix);
    return matrix;
}

var fillRemaining = function(matrix){
    for (let row = 0; row<matrix.length; row++){
        if(canBeForward(matrix[row])){
            for(let column = 0; column<matrix[row].length; column++){
                if(matrix[row][column] === '-'){
                    matrix[row][column] = '>';
                    matrix[column][row] = '<';
                }
            }
       }
       else if(canBeBackward(matrix[row])){
        for(let column = 0; column<matrix[row].length; column++){
            if(matrix[row][column] === '-'){
                matrix[row][column] = '<';
                matrix[column][row] = '>';
            }
        }
       }
    }
    console.log(matrix);
    return matrix;
}

var canBeForward = function (row){
	for(let i = 0; i< row.length; i++){
  	if(row[i] === '<')
    	return false;
     	
  }
  
  return true;
}

var  canBeBackward = function(row){
	for(let i = 0; i< row.length; i++){
  	if(row[i] === '>')
    	return false;
    
  }
  
  return true;
}
var letters = ['A', 'B' , 'C', 'D'];

var unparse = function (matrix){
    var outputString = ' ABCD\n';
    
    for (let row = 0; row < matrix.length;row++){
        //console.log(matrix[row]);
        var text = letters[row] + matrix[row].join('') + '\n';
       // var text = matrix[row].join('');
        outputString = outputString + text;
        
    }
    console.log(outputString);
    return outputString;
}

module.exports = {
    solution
};