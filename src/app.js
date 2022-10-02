const documentBody = document.querySelector('body');

window.addEventListener('contextmenu', (e) => {
    e.preventDefault();

    var callBacks = [
        function () { console.log('First') },
        function () { console.log('Second') },
        function () { console.log('Third') },
        function () { console.log('Fourth') },
        function () { console.log('Fifth') },
        function () { console.log('Sixth') },
    ];

    if (!(document.querySelector('.menu-container'))) {

        createMenu(["View", "Sort by", "Refresh", "New", "Settings", "Show More Options"], callBacks, [e.clientX, e.clientY]);
    }


});

window.addEventListener('click', () => {

    if (documentBody.firstChild.nodeName) {
        documentBody.removeChild(document.querySelector('.menu-container'));
    }


})


// function createMenu(menuOptions, callBack, menuPos) {
//     let options = ``
//     menuOptions.forEach(option => {
//         options += `<div class="menu-item"><p><a href="#">${option}</a></p></div>`;
//     });

//     documentBody.innerHTML = `<div class="menu-container">${options}</div>`;
//     const menu = document.querySelector(".menu-container");
//     menu.style.position = "relative";
//     menu.style.top = `${menuPos[1]}px`;
//     menu.style.left = `${menuPos[0]}px`;
//     const menuItem = document.querySelectorAll('.menu-item');

//     menuItem.forEach((item, index) => {
//         item.addEventListener('click', () => {
//             switch (index) {
//                 case 0:
//                     callBack.one();
//                     break;
//                 case 1:
//                     callBack.two();
//                     break;
//                 case 2:
//                     callBack.three();
//                     break;
//                 case 3:
//                     callBack.four();
//                     break;
//                 case 4:
//                     callBack.five();
//                     break;
//             }
//             //console.log(`Item -${item.innerText} clicked`);
//         })
//     });

// }


function createMenu(menuOptions, callBacks, menuPos) {
    let menuContainer = document.createElement('div');
    menuContainer.classList.add("menu-container");




    menuOptions.forEach((option, index) => {
        let menuItem = document.createElement('div');
        menuItem.classList.add("menu-item");

        let menuContent = document.createElement('a');
        menuContent.textContent = option;

        menuItem.append(menuContent);
        menuItem.addEventListener('click', () => {
            callBacks[index]();
        });
        menuContainer.appendChild(menuItem);
    });

    menuContainer.style.position = "relative";
    menuContainer.style.left = `${menuPos[0]}px`;
    menuContainer.style.top = `${menuPos[1]}px`;
    documentBody.appendChild(menuContainer);
}