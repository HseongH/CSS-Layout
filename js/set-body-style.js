layout.createObj('setBodyStyle');

layout.setBodyStyle.setFont = function() {
    const font = this.getAttribute('class').split(' ')[0];

    layout.setBodyStyle.body.classList.add(font);

    layout.displayed.hideElement(this.parentNode);
}

layout.setBodyStyle.setLayout = function() {
    const style = this.innerText.toLowerCase();
    const siblings = layout.findSiblings(this);

    Array.prototype.forEach.call(siblings, sib => {
        const type = sib.innerText.toLowerCase();
        
        layout.setBodyStyle.body.classList.remove(`style--${type}`);
        sib.classList.remove('active');
    });

    layout.setBodyStyle.body.classList.add(`style--${style}`);
    this.classList.add('active');
}

layout.setBodyStyle.body = document.querySelector('.body__container')
layout.setBodyStyle.layoutControler = document.querySelectorAll('.controler__items');
layout.setBodyStyle.fontSelection = document.querySelectorAll('.font-selection');

Array.prototype.forEach.call(layout.setBodyStyle.fontSelection, function(font) {
    font.addEventListener('click', layout.setBodyStyle.setFont);
});

Array.prototype.forEach.call(layout.setBodyStyle.layoutControler, function(control) {
    control.addEventListener('click', layout.setBodyStyle.setLayout);
});
