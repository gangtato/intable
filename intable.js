class Intable{

   constructor({ 
      header : obj_header,
      data: obj_data,
      className: obj_classname
   }){
      this.header = obj_header;
      this.data = obj_data;
      this.className = obj_classname
   }

   render(node){
      let tbl = document.createElement('table')
      let tblhead = document.createElement('thead')
      let tblbody = document.createElement('tbody')
   
      let row = document.createElement('tr')
      
      for (let i in this.header) {
            // Create a <td> element and a text node, make the text
            // node the contents of the <td>, and put the <td> at
            // the end of the table row
            let cell = document.createElement("th");
            let cellText = document.createTextNode(this.header[i]);
            cell.appendChild(cellText);
            row.appendChild(cell);
      }
      
      tblhead.appendChild(row);
      
      

      for(let j in this.data){
          let row2 = document.createElement("tr")
          for(let k in this.data[j]){
            let cell = document.createElement("td");
            let cellText = document.createTextNode(this.data[j][k])
            cell.appendChild(cellText);
            row2.appendChild(cell)
          }
          tblbody.appendChild(row2)   
      }

      tbl.appendChild(tblhead);
      tbl.appendChild(tblbody);
      tbl.setAttribute('class', this.className);
      node.appendChild(tbl);
   }

}