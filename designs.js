// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {
  console.log("makeGrid is running")
  
  //declare inputs
  var platform, cells, rows, gridHeight, gridWidth, submitQuery;
  
  //declaring the jQuery
  platform =$('#pixel_canvas');
  gridHeight =$('#input_height').val();
  gridWidth =$('#input_width').val();
  
  platform.children().remove()
  
  for (x=0; x < gridHeight; x++) {
  platform.append('<tr></tr>');
  }
  rows = $('tr');
  for (y = 0; y < gridWidth; y++) {
  rows.append('<td></td>');
  }
  cells = platform.find('td');
  
  //Change color of td when clicked
  cells.click(function() {
    //color input
    console.log("changeColor is running!");
    var color; color =$("#colorPicker").val();
    $(this).attr('bgcolor', color);
  });
}
//Defining the size by user with makeGrid
  submitQuery = $('input[type="submit"]')
    submitQuery.click(function(event) {
      event.preventDefault();
      makeGrid(); 
    }
                     );
