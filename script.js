let inputs = document.getElementsByTagName('input');
let del_btn = document.createElement('button');
del_btn.type = "button";
del_btn.textContent = 'X';
let body = document.body;
let btn = document.querySelector('button');
let tbody = document.getElementById('tbody');

btn.addEventListener('click',addNewExpense);

function addNewExpense() {
    if(document.getElementById('stock_row') != null) {
        removeStockRow();
    }
    let tr = addHTMLElement('tr',null,tbody);
    for(let i = 0; i <= 3; i++) {
        if(i === 3) {
            let btn = addHTMLElement('button','X',tr);
            btn.setAttribute('type','submit');
            btn.style.width = "30px";
            btn.addEventListener('click',() => {
                tr.remove();
            });
            break;
        }
        let td = addHTMLElement('td',inputs[i].value,tr);
    }
}

function addHTMLElement(elem, content, parent) {
    let newElem = document.createElement(elem);
    newElem.textContent = content;
    parent.append(newElem);
  
    return newElem;
}

function removeStockRow() {
    let row = document.getElementById('stock_row');
    row.remove();
}