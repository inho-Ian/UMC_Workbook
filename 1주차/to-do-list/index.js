let cnt = 0;

function createDiv(e, v) {
    if (e.keyCode === 13 && v !== "") {
        const newDiv = document.createElement('div');
        const newId = "new" + cnt;
        newDiv.setAttribute("id", newId);
        newDiv.style.backgroundColor = 'aliceblue';
        newDiv.style.width = '20%';
        newDiv.style.display = 'flex';
        newDiv.style.justifyContent = 'space-between';
        newDiv.style.margin = 'auto';
        newDiv.style.width = '40%';
        newDiv.style.padding = '2%';
        newDiv.style.backgroundColor = 'transparent';
        newDiv.style.fontWeight = 'bold';
        newDiv.style.fontSize = '18px';

        const newInput = document.createElement('input');
        newInput.setAttribute("type", "button");
        newInput.setAttribute("value", "완료");
        newInput.setAttribute("onclick", "moveDiv(this)");
        newInput.setAttribute("id", newId + "input");

        const newText = document.createTextNode(v);
        newDiv.appendChild(newText);
        newDiv.appendChild(newInput);
        document.getElementById("box").appendChild(newDiv);
        document.getElementById('todoInput').value = "";
        cnt++;
    }
}

function moveDiv(e) {
    const targetDiv = document.getElementById(e.id.slice(0, -5));
    const input = document.getElementById(e.id);
    input.setAttribute("value", "삭제");
    input.setAttribute("onclick", "removeDiv(this)");
    document.getElementById('box2').appendChild(targetDiv);
}

function removeDiv(e) {
    const inputId = e.id;
    const divId = inputId.slice(0, -5);
    const targetDiv = document.getElementById(divId);
    targetDiv.remove();
}
