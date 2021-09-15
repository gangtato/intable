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

export { searchDatatable };