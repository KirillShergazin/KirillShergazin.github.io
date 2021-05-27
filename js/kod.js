function ChangeColor(color)
{    
    switch(color)
    {
        case 'Yellow':
            document.getElementById("body").style.backgroundColor = "#FF8C00"
            break;

        case 'White':
            document.getElementById("body").style.backgroundColor = "#FFFAFA"
            break;
        case 'Red':
        document.getElementById("body").style.backgroundColor = "#8B0000"
        break;
        case 'Green':
            document.getElementById("body").style.backgroundColor = "#2E8B57"
            break;
    }
}

function ChangeNames()
{
    if(document.getElementById('userSurname').value != '')
        document.getElementById('hSurname').innerHTML=document.getElementById('userSurname').value
    if(document.getElementById('userName').value != '')
        document.getElementById('hName').innerHTML=document.getElementById('userName').value
    if(document.getElementById('userPatronymic').value != '')
        document.getElementById('hPatronymic').innerHTML=document.getElementById('userPatronymic').value
}