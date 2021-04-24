

function addition()
{
    var a,b,sum;
    a = parseInt(document.getElementById('num1').value);
    b = parseInt(document.getElementById('num2').value);
    sum = a+b;
    document.getElementById('res').value=sum;
}

function subtraction()
{
    var a,b,sub;
    a = parseInt(document.getElementById('num1').value);
    b = parseInt(document.getElementById('num2').value);
    sub = a-b;
    document.getElementById('res').value=sub;
}

function multiplication()
{
    var a,b,mul;
    a = parseInt(document.getElementById('num1').value);
    b = parseInt(document.getElementById('num2').value);
    mul = a*b;
    document.getElementById('res').value=mul;
}

function division()
{
    var a,b,div;
    a = parseInt(document.getElementById('num1').value);
    b = parseInt(document.getElementById('num2').value);
    div=a/b;
    document.getElementById('res').value=div;
}