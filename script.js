// Your code here

let table = document.getElementsByTagName('table') [0]

function makeRow () {
    const tableRow = document.createElement ('tr')
    for (let i = 0; i<20; i++){
    const tableData = document.createElement('td')
    tableRow.appendChild(tableData)
    }
    table.appendChild(tableRow)
}

const button = document.getElementById('add-row')
button.addEventListener('click', makeRow)

table.addEventListener('click', colorize)
let select = document.getElementById('drop-down')

color = ''
select.addEventListener('change', function(event){
color = event.target.value

})

function colorize(event){
const pacman = event.target
if (pacman.className.length){
    pacman.className = ''
} else{
     pacman.className = color
 }

 

}






