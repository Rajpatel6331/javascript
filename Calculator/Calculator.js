let tr=''
let adddata=(i)=>{
tr+=i;
document.getElementById('results').value=tr;
}
let nas=()=>{
data=document.getElementById('results').value;
let nas=eval(data);
document.getElementById("results").value=nas;
tr='';


}

let clear1=()=>{
    document.getElementById("results").value = 0
    tr = ' ';
}


function del1() {
    if(resultDisplay.textContent) {
      let result = document.querySelector('#results').innerHTML
      resultDisplay.innerHTML = result.substring(0, result.length - 1)
    }
  }


