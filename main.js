

//clear all children of message-area
function chatClear (){
    document.getElementById("message-area").innerHTML = "";
}

//listen to the FROM/TO radio and update chat with inputted text
function addMessage() {
    const from = document.getElementById("from").checked;
    let message = document.getElementById("inputText");
    let messageArea = document.getElementById("message-area");
    
    messageArea.innerHTML += `
        <div class="${from ? 'from' : 'to'}">
        ${from ? '<div class="sender">A. Nother</div>' : ''}
        <div class="message-text">${message.value}</div>
        <div class="message-time">12:15 PM</div>
      </div>
        `
    message.value="";
    }


function chatDownload () {
    
    domtoimage.toBlob(document.getElementById('message-area'))
    .then(function (blob) {
        window.saveAs(blob, 'my-node.png');
    });

}

