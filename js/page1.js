function addRow(mytable) { 
    var table = document.getElementById(mytable);

    var rowCount = table.rows.length;
    if(rowCount < 4){
        var row = table.insertRow(rowCount);

        var cell1 = row.insertCell();
        cell1.innerHTML = `<select name="item" id="item${rowCount}" class="item">
        <option value="item 1">item 1</option>
        <option value="item 2">item 2</option>
        <option value="item 3">item 3</option>`;

        var cell2 = row.insertCell();
        cell2.innerHTML = `<input type="button" value="X" id="delete_button${rowCount}" name="delete_button" class="delete_button">`;
    }
}

let del = document.getElementById('delete_button3')
if (del){
del.addEventListener('click',remove_row)
}

function remove_row(op){
  console.log(op);
  let c = op.parentElement.parentElement.rowIndex;
  document.getElementById('mytable').deleteRow(c);


}
let del2 = document.getElementById('delete_button2')
if (del2){
del2.addEventListener('click',remove_row)
}

function remove_row(op){
  console.log(op);
  let c = op.parentElement.parentElement.rowIndex;
  document.getElementById('mytable').deleteRow(c);


}
// function addClass() {
//   var v = document.getElementById("item2");
//   v.className += "itemlist1";
// }

// const del1 = document.getElementById('delete_button');

// if(del1){
//   del1.addEventListener('click',deleteRow)
// }

// const del2 = document.getElementById('delete_button');
// if(del2){
  
//   del2.addEventListener('click',deleteRow2)
// }
// const del3 = document.getElementById('delete_button');
// if(del3){
//   del3.addEventListener('click',deleteRow3)
// }



// var rowCount = table.rows.length;

// function deleteRow(){
  
//   let i = document.getElementById('delete_button').parentElement.parentElement.rowIndex;
  
//   var rowCount = document.getElementById('mytable').rows.length;
//     if(rowCount > 2){
//         document.getElementById('mytable').deleteRow(i);
//     }
// }
// function deleteRow2(){
//     let i = document.getElementById('delete_button').parentElement.parentElement.rowIndex;
//     var rowCount = document.getElementById('mytable').rows.length;
//     if(rowCount > 2){
//         document.getElementById('mytable').deleteRow(i);
//     }
// }

// function deleteRow3(){
//   let i = document.getElementById('delete_button').parentElement.parentElement.rowIndex;
//   var rowCount = document.getElementById('mytable').rows.length;
//     if(rowCount > 2){
//       document.getElementById('mytable').deleteRow(i);
//     }
// }
// if (document.getElementById('item2')!=null && document.getElementById('item3')!=null) {
//   let select1 = document.getElementById('item1');
//   let select2 = document.getElementById('item2');
//   let select3 = document.getElementById('item3');

//   select1.addEventListener('change',disableoption);
//   select2.addEventListener('change',disableoption);
//   select3.addEventListener('change',disableoption);


//   function disableoption(event){
//     let s1_val = document.querySelector('#item1').value;

//     document.querySelector(`#item2 option[value=${s1_val}]`).setAttribute('disabled',true);
//     document.querySelector(`#item3 option[value=${s1_val}]`).setAttribute('disabled',true);

//     // $('.selectpicker').selectpicker('refresh')

//     let s2_val = document.querySelector('#item2').value;

//     document.querySelector(`#item1 option[value=${s2_val}]`).setAttribute('disabled',true);
//     document.querySelector(`#item3 option[value=${s2_val}]`).setAttribute('disabled',true);

//     // $('.selectpicker').selectpicker('refresh')


//     let s3_val = document.querySelector('#item3').value;

//     document.querySelector(`#item1 option[value=${s3_val}]`).setAttribute('disabled',true);
//     document.querySelector(`#item2 option[value=${s3_val}]`).setAttribute('disabled',true);

// }

// }

