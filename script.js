function displayResult(){
	var curpos = document.getElementById('curpos').value;
	if(/[A-H]/.test(curpos[0]) && /[1-8]/.test(curpos[1])){
		document.getElementById('result').innerHTML = ChessKnight(curpos);
	}else{
		document.getElementById('result').innerHTML = "Ошибка ввода";
	}	
}

function letterNumber(val){
	var list = {
		"A" : 1,
		"B" : 2,
		"C" : 3,
		"D" : 4,
		"E" : 5,
		"F" : 6,
		"G" : 7,
		"H" : 8,
	}

	var reverslist = {
		1 : "A",
		2 : "B",
		3 : "C",
		4 : "D",
		5 : "E",
		6 : "F",
		7 : "G",
		8 : "H",
	}

	if(/[1-8]/.test(val)){
		return reverslist[val];
	}else if(/[A-H]/.test(val)){
		return list[val];
	}else{
		return -1;
	}
}

function ChessKnight(pos){
	var moveX = [2, 2, 1, -1, -2,-2, 1, -1];
	var moveY = [1, -1, 2, 2, 1, -1, -2, -2];	
	var result = [];
	var x0 = letterNumber(pos[0]);
	var y0 = Number(pos[1]);

	for(var i = 0; i < 8; i++){
		var x = x0 + moveX[i];
		var y = y0 + moveY[i];
		if(x>0 && x<9 && y>0 && y<9){
			result.push(letterNumber(x)+String(y));
		}
	}
	return result.join(", ");
}