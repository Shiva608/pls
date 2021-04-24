function login()
{
    var a='',b='';
    a=document.getElementById('em').value;
    b=document.getElementById('pass').value;

    if(a=='shivasaipolysetty123@gmail.com' && b=='123456')
    {
        document.getElementById('para').innerHTML='valid username and password : login successfull';
        document.getElementById('para').style.color='green';
        window.location.href='clac.html';
    }
    else
    {
        document.getElementById('para').innerHTML='Invalid username or password';
        document.getElementById('para').style.color='red';
    }
    return false;
}
