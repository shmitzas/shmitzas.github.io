// Get a reference to the container element where you want to add the tables
const container = document.getElementById("main");
// Fetch data from data.json
fetch("data/cybersec_tools.json")
  .then(response => response.json())
  .then(data => {
    // Loop through each category in the data
    for (const category in data) {
        let categories = `<div class="col-12"><h4 class="mt-5 mb-3">${category}</h4></div>`
        let tableInfo =`
        <table class="table">
            <thead>
                <tr>
                    <th scope="col" class="col-2">Name</th>
                    <th scope="col" class="col-2">Cheat-sheet</th>
                    <th scope="col" class="col-10">Description</th>
                </tr>
            </thead>
            <tbody>`;
        // Loop through each item in the category
        for (const item of data[category]) {
            tableInfo +=`
                <tr>
                    <td scope="row"><a href="${item.url}" class="text-decoration-none">${item.tool}</a></td>
                    <td scope="row"><a href="${item.cheat_sheet_url}" target="_blank" class="text-decoration-none">Link</a></td>
                    <td class="text-decoration-none">${item.desc}</td>
                </tr>`;
        }
        
        tableInfo +=`
            </tbody>
        </table>`;
        container.innerHTML += categories;
        container.innerHTML += tableInfo;
    } 
  })
  .catch(error => console.error(error));