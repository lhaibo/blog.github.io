function deleterow(){
  this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);
  // var checkbx =document.getElementsByName("chbox");
  // for (var i = 0; i < checkbx.length; i++) {
  //   if (checkbx[i].checked) {
  //     var temp=checkbx[i].parentNode.parentNode;
  //     temp.parentNode.removeChild(temp);
  //       i--;
  //   }
  // }
}
function deleteAllchk(){
  //this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);
  var checkbx =document.getElementsByName("chbox");
  for (var i = 0; i < checkbx.length; i++) {
    if (checkbx[i].checked) {
      var temp=checkbx[i].parentNode.parentNode;
      temp.parentNode.removeChild(temp);
      i--;
    }
  }
}
function addInf(){
  var hideDiv = document.getElementById("hide");
  alert("ok");
}
function add(){
  document.getElementById("hide").style.display ='block';

}
function enter(){
  var tb = document.getElementById("table1");

  var t = document.createElement("tr");
  t.innerHTML = "<tr><td><input type="\"checkbox\"" name="\"chbox\"" id="\"\""></td><td><input type="\"text\"" name="\"\"" id="\"text\"" value=""+document.getElementById("addName").value+""></td><td><input type="\"text\"" name="\"\"" id="\"text\"" value=""+document.getElementById("addSno").value+""></td><td><button type="\"button\"" name="\"delbutton\"" id="\"del2\"">删除</button></td></tr>"
  // var d = document.createElement("td");
  // d.innerHTML = document.getElementById("addName").value;
  // t.append(d);
  // d.innerHTML = document.getElementById("addSno").value;
  // t.append(d);
  tb.appendChild(t);
  document.getElementById("hide").style.display ='none';

}
function start(){
  var dataName = ["小明","小红","小华"];
  var dataSno = ["1901","1902","1903"];
  
  for (var i = 1; i 