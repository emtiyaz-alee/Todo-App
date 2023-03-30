function del(){
    var a=document.getElementById('ul')
    a.innerHTML=''
}
function foo(){
  var a=document.getElementById('inp')
 var getul=document.getElementById('ul')
 var list=document.createElement('li')
 var litext=document.createTextNode(a.value)
 list.appendChild(litext)
 getul.appendChild(list)
 localStorage.setItem('data',a.value)
 a.value=''
 var btn=document.createElement('button')
 var btntext=document.createTextNode('Delete')
 btn.appendChild(btntext)
list.appendChild(btn)
  btn.setAttribute('onclick','del(this)')
  var btn1=document.createElement('button')
 var btntext1=document.createTextNode('Update')
 btn1.appendChild(btntext1)
list.appendChild(btn1)
  btn1.setAttribute('onclick','upd(this)')
}
function upd(e){
    var editprompt = prompt('Enter New Value',e.parentNode.firstChild.nodeValue)
    e.parentNode.firstChild.nodeValue = editprompt
    // console.log(e.parentNode.firstChild.nodeValue)
}
