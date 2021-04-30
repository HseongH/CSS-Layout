const layout = {
    createObj: function(ns) {
        let parent = layout;
        let nameSpace = ns.split('.');
        const loop = nameSpace.length;

        if (nameSpace[0] === 'layout') {
            nameSpace = nameSpace.slice(1);
        }

        for (let i = 0; i < loop; i++) {
            if (!parent[nameSpace[i]]) {
                parent[nameSpace[i]] = {};
            }

            parent = parent[nameSpace[i]];
        }

        return parent;
    }
};

// COMMON VARIABLE
layout.box = document.querySelectorAll('.box');
layout.text = document.querySelectorAll('.text');
layout.selectedBox;

// COMMON FUNCTION
layout.findSiblings = function(elem) {
    const siblings = [];
    let searchSibling = elem.parentNode.firstChild;

    while (searchSibling) {
        if (searchSibling.nodeType === 1 && searchSibling !== elem) {
            siblings.push(searchSibling);
        }

        searchSibling = searchSibling.nextSibling;
    }

    return siblings;
}
