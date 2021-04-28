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
