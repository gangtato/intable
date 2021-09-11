class Intable{

   constructor({ 
      header : obj_header,
      data: obj_data,
      className: obj_classname,
      search: obj_search,
      pagination: obj_pagination
   }){
      this.header = obj_header;
      this.data = obj_data;
      this.className = obj_classname,
      this.search = obj_search,
      this.pagination = obj_pagination
   }

   render(node){
      var isi = this.data;
      var data = this.data;
      if(this.search){
         let search = document.createElement('input')
         search.setAttribute('placeholder','Cari')
         search.setAttribute('type','search')
         search.setAttribute('class','border rounded border-black px-2 py-1 mb-2')
         // search.addEventListener('keyup',function(){
         //    data = isi.filter(item => item.includes(search.value)).flat();
         //    isi = data
         // });
         node.appendChild(search)
         
      }
      
      let tbl = document.createElement('table')
      let tblhead = document.createElement('thead')
      
      let tblbody = document.createElement('tbody')
   
      let row = document.createElement('tr')

      // Create TH
      for (let i in this.header) {
            let cell = document.createElement("th");
            cell.setAttribute('class','px-2 py-1 text-white bg-green-400 border border-black')
            let cellText = document.createTextNode(this.header[i]);
            cell.appendChild(cellText);
            row.appendChild(cell);
      }
      
      tblhead.appendChild(row);
      // Create TD
      for(let j in isi){
          let row2 = document.createElement("tr")
          for(let k in isi[j]){
            let cell = document.createElement("td");
            cell.setAttribute('class','px-2 py-1 border border-black rounded bg-gray-100')
            let cellText = document.createTextNode(isi[j][k])
            cell.appendChild(cellText);
            row2.appendChild(cell)
          }
          tblbody.appendChild(row2)   
      }

      tbl.appendChild(tblhead);
      tbl.appendChild(tblbody);
      tbl.setAttribute('class','mb-2 w-1/2 text-center rounded')
      node.appendChild(tbl);
      
      if(this.pagination){

         let nav = document.createElement('nav')
         nav.setAttribute('aria-label','navigation')
         let ul = document.createElement('ul')
         let liPrevious = document.createElement('li')
         liPrevious.setAttribute('class','border rounded-l-sm border-black px-2 py-1 inline-block bg-blue-200 text-black hover:bg-green-400 hover:text-white cursor-pointer')
         let liNext = document.createElement('li')
         liNext.setAttribute('class','border rounded-r-sm border-black px-2 py-1 inline-block bg-blue-200 text-black hover:bg-green-400 hover:text-white cursor-pointer')
         let anchorPrevious = document.createElement('a')
         anchorPrevious.setAttribute('class','page-link')
         let anchorNext = document.createElement('a')
         anchorNext.setAttribute('class','page-link')
         let textAnchorPrevious = document.createTextNode('Previous')
         let textAnchorNext = document.createTextNode('Next')   
         // anchor
         anchorPrevious.appendChild(textAnchorPrevious)
         anchorNext.appendChild(textAnchorNext)
         
         // li
         liPrevious.appendChild(anchorPrevious)
         liNext.appendChild(anchorNext)
   
         ul.appendChild(liPrevious)

         for(let i=1; i<2; i++){
            let li = document.createElement('li')
            li.setAttribute('class','border border-black px-2 py-1 inline-block bg-gray-100 cursor-pointer')
            let anchorLi = document.createElement('a')
            anchorLi.setAttribute('class','page-link')
            let textAnchorLi = document.createTextNode(i)
            anchorLi.appendChild(textAnchorLi)
            li.appendChild(anchorLi)
            ul.appendChild(li)
         }
         // ul
         
         
         ul.appendChild(liNext)
         // nav
         nav.appendChild(ul)
   
         node.appendChild(nav);
      }
 
   }


}
