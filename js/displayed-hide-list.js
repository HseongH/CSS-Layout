layout.createObj('displayed');

layout.displayed.showElement = function(target) {
    target.classList.remove('hide');
}

layout.displayed.hideElement = function(target) {
    target.classList.add('hide');
}

layout.displayed.hideElementWhenClickAnywhere = function(elem) {
    const target = event.target;
    const arg = Array.prototype.slice.call(arguments, 1);

    if (target.closest(arg)) return;

    elem.classList.add('hide');
}

// MODAL SHOW & HIDE
layout.displayed.closeBtn = document.querySelectorAll('.btn--close');
layout.displayed.enterImg = document.querySelector('.enter-image');
layout.displayed.font = document.querySelector('.font-selection-container');

[].forEach.call(layout.displayed.closeBtn, close => {
    close.addEventListener('click', function() {
        layout.displayed.hideElement(this.parentNode.parentNode);
    });
});

[].forEach.call(layout.box, box => {
    box.addEventListener('click', function() {
        layout.displayed.showElement(layout.displayed.enterImg);
    });
});

// HIDE ELEMENT WHEN CLICKED ANYWHERE
document.addEventListener('click', () => {
    layout.displayed.hideElementWhenClickAnywhere(layout.displayed.enterImg, '.box', '.enter-image');
    layout.displayed.hideElementWhenClickAnywhere(layout.displayed.font, '.font-selection-container');
});
