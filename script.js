const tableData = [
    {
      category: "Reaction",
      score: 80,
      icon: "/assets/images/icon-reaction.svg"
    },
    {
      category: "Memory",
      score: 92,
      icon: "/assets/images/icon-memory.svg"
    },
    {
      category: "Verbal",
      score: 61,
      icon: "/assets/images/icon-verbal.svg"
    },
    {
      category: "Visual",
      score: 72,
      icon: "/assets/images/icon-visual.svg"
    }
  ]
  
const headEl = document.createElement("th")
headEl.type = 'th';
headEl.innerText = "Summary";
const table = document.querySelector(".summary-container")
table.appendChild(headEl);
const contentEl =document.querySelector(".content")
for (let i = 0; i < tableData.length; i++) { 
    const tableBody= document.createElement("tbody");
    
    tableBody.innerHTML = `<tr class="row${[i]}">
                              <td><img src= ${tableData[i].icon} ></td>
                              <td>${tableData[i].category}</td>
                              <td>${tableData[i].score} <span class="/100">/ 100</span></td>
                            </tr>`;
    
    table.appendChild(tableBody);
    contentEl.appendChild(table)
}



document.body.appendChild(contentEl);
const buttonEl = document.createElement("button");
buttonEl.innerText = "Continue";
buttonEl.type = "button";
table.appendChild(buttonEl);


