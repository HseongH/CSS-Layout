layout.createObj('enterText');

layout.enterText.enterText = function() {
    const textBox = layout.selectedText;
    
    if (this.value) {
        textBox.innerText = this.value;
        return;
    }
    
    textBox.removeChild(this);
    textBox.classList.remove('input-text');
}

layout.enterText.createInputArea = function(parent) {
    if (parent.querySelector('input')) return;

    const inputBox = document.createElement('input');
    inputBox.setAttribute('class', 'input-box');
    inputBox.value = parent.innerText;
    
    if (parent.innerText) parent.innerText = '';

    parent.appendChild(inputBox);
    parent.classList.add('input-text');
    inputBox.select();
    
    inputBox.addEventListener('change', layout.enterText.enterText);
}

Array.prototype.forEach.call(layout.text, text => {
    text.addEventListener('click', function() {
        layout.selectedText = text;
        layout.enterText.createInputArea(this);
    });
});
