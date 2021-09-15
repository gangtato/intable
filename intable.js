class Table {
   constructor(init) {
     this.init = init;
   }
 
   createTableHeader(data) {
     let tagOpen = "<thead><tr>";
     let tagCloses = "</tr></thead>";
     data.forEach((d) => {
       tagOpen += `<th>${d}</th>`;
     });
 
     return tagOpen + tagCloses;
   }
 
   createTableBody(data) {
     let tagOpen = "<tbody>";
     let tagCloses = "</tbody>";
 
     data.forEach((item) => {
       tagOpen += `<tr>`;
       item.forEach((i) => {
         tagOpen += `
            <td>${i}</td>
         `;
       });
       tagOpen += `</tr>`;
     });
 
     return tagOpen + tagCloses;
   }
 
   render(element) {
     let table =
       "<table class='table table-hover'>" +
       this.createTableHeader(this.init.columns) +
       this.createTableBody(this.init.data) +
       "</table>";
     element.innerHTML = table;
   }
 }
 
 function searchDatatable() {
   let input, filter, data, tr, td, result;
   input = document.getElementById("search");
   filter = input.value.toUpperCase();
 
   data = document.getElementById("table");
   tr = data.getElementsByTagName("tr");
 
   for (let i = 0; i < tr.length; i++) {
     td = tr[i].getElementsByTagName("td")[0];
     if (td) {
       result = td.textContent || td.innerText;
       if (result.toUpperCase().indexOf(filter) > -1) {
         tr[i].style.display = "";
       } else {
         tr[i].style.display = "none";
       }
     }
   }
 }
 
 const data = new Table({
   columns: ["Name", "Age", "Address"],
   data: [
     ["Elfin", "20", "Jakarta"],
     ["Itce", "22", "Medan"],
     ["Aldi", "30", "Pekanbaru"]
   ]
 });
 
 const table = document.getElementById("table");
 data.render(table);
 