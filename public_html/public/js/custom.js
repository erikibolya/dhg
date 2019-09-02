var hooks = [];
var menu_items = document.querySelectorAll(".topnav__item ");

for (let i = 0; i < menu_items.length; i++) {
    let item = menu_items[i];
    item.addEventListener('click', function (event) {
        event.preventDefault();
        let hash = item.hash.slice(1);
        let element = document.getElementById(hash);
        element.scrollIntoView({behavior: "smooth"});
    });

}