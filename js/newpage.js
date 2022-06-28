var count = 1;
$('#add_button').click(function(){
  let row = $(this).siblings('#mytable').children().children('#row1').html();
  let rowCount = $('#mytable tr').length;
  if(rowCount < 4){
    count++;
      $('#mytable').append(`<tr id="row${count}">`+row+`</tr>`);

    //   $(`#row${count}`).children().children('select').attr('id',`selector${rowCount}`)
    //   $(`#row${count}`).children().children('input').attr('id',`delete_button${count}`)
      $(`#row${count}`).children().children('input').attr('class',`delete_but new`)

      for(let i = 1;i<=count;i++){
        let item_value = $('#row'+i).children().children('select').val()
        if(item_value !== undefined){
          for(let j = i;j<=count;j++){
            if($('#row'+j).children().children('select').length !== 0){
              $('#row'+j).children().children('select').children(`option[value=${item_value}]`).attr('disabled',true)
            }
          }
        }
      }

      


  }

  
  $('.delete_but').click(function(){
      if($(this).attr('class') === 'delete_but new'){
          $(this).parent().parent().remove();
      }
  });
  
});


// let hide = function(){

// }

// // $('#selectbut').select(function(){
// //   if($(this).attr(''))


// });


