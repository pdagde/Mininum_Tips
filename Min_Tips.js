function calculetTips(coinOne,coinTwo,totalBill){
    var i=0;
    var onetip=0;
    while(coinOne+(coinTwo*i)<totalBill){	
	i++; 
    }
    if(totalBill <= (coinOne+(coinTwo*i)) )
    {
	onetip = (coinOne+(coinTwo*i)) - totalBill;
    }
    return onetip;
}


function _minimumTip(coinOne,coinTwo,totalBill){
    var i=0;

    if(coinOne > totalBill && coinTwo > totalBill){
	return (Math.min(coinOne, coinTwo) - totalBill);
    }
    
    var minimumTip = Math.min(coinOne, coinTwo); 
    while((coinOne*i) <= totalBill)
    {
	var isminimumTips;
	isminimumTips = calculetTips(coinOne*i,coinTwo,totalBill);
	if(isminimumTips < minimumTip){
	    minimumTip = isminimumTips;
	}
	i++;
    }
    return minimumTip;
}

function TASK_1(){

    var BillNumber = 1;
    if (process.argv.length < 3) {
	console.log("PLEASE RUN# node Min_Tips.js input.txt");
	process.exit(1);
    }

    var fs = require('fs');
     filename = process.argv[2];
    var lineReader = require('readline').createInterface({
	input: require('fs').createReadStream(filename)
    });
    lineReader.on('line', function (data) {
	var arr = data.split(" ");
	arr = arr.map(function (val) { return +val;});
	var minimumTip = _minimumTip(arr[0],arr[1],arr[2]);
	console.log("Minimum tips BillNumber",BillNumber +"  is  "+ minimumTip);
	BillNumber++;
    });
}

TASK_1();
