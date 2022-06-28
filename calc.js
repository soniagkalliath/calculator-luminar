function displayNum(num){
    result.value+=num
}

function clearBox(){
    result.value=""
}

function evaluateExpr(){
    expr =result.value
    output=eval(expr)
    result.value=output

    // result.value=eval( result.value)
}

function removeVal(){
    curExpr=result.value
    result.value = curExpr.slice(0,-1)
}