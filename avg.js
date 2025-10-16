function average(){
    let num1=document.getElementById('id1').value
    let num2=document.getElementById('id2').value
    let num3=document.getElementById('id3').value
    let num4=document.getElementById('id4').value
    let num5=document.getElementById('id5').value
    let num6=document.getElementById('id6').value
    let result=eval(num1)+eval(num2)+eval(num3)+eval(num4)+eval(num5)+eval(num6)
    let avg=eval(result)/6
    alert(avg)
}
function doErase(){
    let clear =confirm('Are you okay to clear')
    if (clear){
    document.getElementById('id1').value=""
    document.getElementById('id2').value=""
    document.getElementById('id3').value=""
    document.getElementById('id4').value=""
    document.getElementById('id5').value=""
    document.getElementById('id6').value=""
    }

}