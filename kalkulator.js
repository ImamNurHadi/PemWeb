function tambah()
{
    var angka1= parseFloat(document.kalkulatod.angka1.value);
    var angka2= parseFloat(document.kalkulatod.angka2.value);
    var hasil= angka1+angka2;
    document.kalkulatod.hasil.value=hasil;
}

function kurang()
{
    var angka1= parseFloat(document.kalkulatod.angka1.value);
    var angka2= parseFloat(document.kalkulatod.angka2.value);
    var hasil= angka1-angka2;
    document.kalkulatod.hasil.value=hasil;
}
function bagi()
{
    var angka1= parseFloat(document.kalkulatod.angka1.value);
    var angka2= parseFloat(document.kalkulatod.angka2.value);
    var hasil= angka1/angka2;
    document.kalkulatod.hasil.value=hasil;
}
function kali()
{
    var angka1= parseFloat(document.kalkulatod.angka1.value);
    var angka2= parseFloat(document.kalkulatod.angka2.value);
    var hasil= angka1*angka2;
    document.kalkulatod.hasil.value=hasil;
}

function aritmatika()
{
    let angka1 = parseFloat(document.getElementById("angka1").value);
    let angka2 = parseFloat(document.getElementById("angka2").value);
    let operator = document.getElementById("operator").value;
    let hasil;

    if (operator=="tambah")
    {
        hasil = angka1+angka2;
    }
    else if (operator=="kurang")
    {
        hasil = angka1 - angka2;
    }
     else if (operator == "kali") 
    {
        hasil = angka1 * angka2;
    } 
    else if (operator == "bagi") 
    {
        hasil = angka1 / angka2;
    }

    document.getElementById("hasil").value=hasil;
    
}