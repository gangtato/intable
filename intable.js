import { searchDatatable } from './module/searchDatatable'

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

export { searchDatatable };
