function fillTable(){
    var name =  document.getElementById('first_name').value + ' ' + document.getElementById('last_name').value;
    var dateOfBirth = document.getElementById('date').value + ' ' + document.getElementById('month').value + ' ' + document.getElementById('year').value;
    var age = String(document.getElementById('age').value);
    var education = String(document.getElementById('education').value);
      // console.log(document.getElementById('first_name').value);
      // console.log(document.getElementById('last_name').value);
      // console.log(document.getElementById('date').value,document.getElementById('month').value, document.getElementById('year').value )
      // console.log(document.getElementById('age').value);
      // console.log(document.getElementById('education').value)
      // console.log(name, dateOfBirth, age, education);
      var body = document.getElementsByTagName("body")[0];
      // creates a <table> element and a <tbody> element
      var tbl = document.createElement("table");
      var tblBody = document.createElement("tbody");
      // creating all cells
      for (var i = 0; i < 1; i++) {
        // creates a table row
        var row = document.createElement("tr");
        for (var j = 0; j < 4; j++) {
          // Create a <td> element and a text node, make the text
          // node the contents of the <td>, and put the <td> at
          // the end of the table row
          var cell = document.createElement("td");
          if(j === 0) {cellText = document.createTextNode(name); }
          else if(j === 1) {cellText = document.createTextNode(dateOfBirth); }
          else if(j === 2) {cellText = document.createTextNode(age); }
          else if(j === 3) { cellText = document.createTextNode(education); }
          cell.appendChild(cellText);
          row.appendChild(cell);
        }
        // add the row to the end of the table body
        tblBody.appendChild(row);
      }
      // put the <tbody> in the <table>
      tbl.appendChild(tblBody);
      // appends <table> into <body>
      body.appendChild(tbl);
      // sets the border attribute of tbl to 2;
      tbl.setAttribute("border", "2");
      
      document.getElementById('first_name').reset()
      document.getElementById('last_name').reset()
      document.getElementById('date').reset()
      document.getElementById('month').reset()
      document.getElementById('year').reset()
      document.getElementById('age').reset()
      document.getElementById('education').reset()
}

