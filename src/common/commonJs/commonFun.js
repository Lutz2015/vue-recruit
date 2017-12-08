// 将数字m转换成万为单位，并保留n位小数(自行添加单位"万")
function conversionUnitWan(m, n){
	if( m == undefined || m == 0){
		m = 0;
	}
	var num = m / 10000;
	var value = num.toFixed(n);
	return value;
}

// 将数字m转换为百分比，并保留n位小数(自行添加百分号)
function conversionUnitPercentage(m, n){
	if( m == undefined || m == 0){
		m = 0;
	}
	var num = m * 100;
	var value = num.toFixed(n);
	return value;
}

// 将数字m保留n位小数
function retainDecimal(m,n){
	if(m == undefined || m == 0){
		m = 0;
	}
	var num = m ;
	var value = num.toFixed(n);
	return value;
}
