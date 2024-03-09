function addItem() {
    var input = document.getElementById("itemInput");
    var item = input.value;
    if (item !== "") {
        var itemList = document.getElementById("itemList");
        var li = document.createElement("li");
        li.innerHTML = item + ' <button class="delete-btn" onclick="removeItem(this)">X</button>';
        itemList.appendChild(li);
        input.value = "";
    } else {
        alert("Inserisci un articolo valido!");
    }
}

function removeItem(element) {
    var li = element.parentNode;
    li.parentNode.removeChild(li);
}


function downloadList() {
    var items = document.querySelectorAll('#itemList li');
    var text = Array.from(items).map(item => item.textContent).join('\n');
    
    var blob = new Blob([text], { type: 'text/plain' });
    var url = window.URL.createObjectURL(blob);
    
    var a = document.createElement('a');
    a.href = url;
    a.download = 'lista_spesa.txt';
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
}


document.getElementById('downloadBtn').addEventListener('click', downloadList);

// Funzione per aggiungere un elemento alla lista con la quantità selezionata
function addItem() {
    var input = document.getElementById("itemInput");
    var select = document.getElementById("quantitySelect");
    var item = input.value;
    var quantity = select.value;

    if (item !== "") {
        var itemList = document.getElementById("itemList");
        var li = document.createElement("li");
        li.innerHTML = `
            <span>${item}</span>
            <span class="quantity">${quantity}</span>
            <button onclick="removeItem(this)" class="delete-btn">X</button>
        `;
        itemList.appendChild(li);
        input.value = "";
        select.value = "1";
    } else {
        alert("Inserisci un articolo valido!");
    }
}


function removeItem(button) {
    var li = button.parentNode;
    li.parentNode.removeChild(li);
}

function addItem() {
    var input = document.getElementById("itemInput");
    var select = document.getElementById("quantitySelect");
    var item = input.value;
    var quantity = select.value;

    if (item !== "") {
        var itemList = document.getElementById("itemList");
        var li = document.createElement("li");
        li.innerHTML = `
            <span>${item}</span>
            <span class="quantity">${quantity}</span>
            <button onclick="removeItem(this)" class="delete-btn">X</button>
        `;
        itemList.appendChild(li);
        input.value = "";
        select.value = "1";
    } else {
        alert("Inserisci un articolo valido!");
    }
}


function removeItem(button) {
    var li = button.parentNode;
    li.parentNode.removeChild(li);
}


function downloadList() {
    var header = "Lista Della Spesa - Powered by Chril\n\n";
    
    var items = document.querySelectorAll('#itemList li');
    var text = Array.from(items).map(item => {
        var itemName = item.querySelector('span').textContent;
        var itemQuantity = item.querySelector('.quantity').textContent;
        return `${itemName} - Quantità: ${itemQuantity}`;
    }).join('\n');

    var blob = new Blob([header, text], { type: 'text/plain' });
    var url = window.URL.createObjectURL(blob);

    var a = document.createElement('a');
    a.href = url;
    a.download = 'lista_spesa.txt';
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
}


document.getElementById('downloadBtn').addEventListener('click', downloadList);

