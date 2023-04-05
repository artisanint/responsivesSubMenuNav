(()=>{

    const openNavMenu = document.querySelector('.open_nav_menu');
    const closeNavMenu = document.querySelector('.close_nav_menu');
    const navMenu = document.querySelector('.nav_menu');
    const menuOverlay = document.querySelector('.menu_overlay');
    const mediaSize = 991;

    openNavMenu.addEventListener('click', toggleNav);
    closeNavMenu.addEventListener('click', toggleNav);
    // Close the navMenu by clicking outside
    menuOverlay.addEventListener('click', toggleNav);

    function toggleNav(){
        navMenu.classList.toggle('open');
        menuOverlay.classList.toggle('active');
        document.body.classList.toggle('hidden-scroll');
    };

    navMenu.addEventListener('click', (event)=>{
        if(event.target.hasAttribute('data-toggle') && window.innerWidth <= mediaSize){
            event.preventDefault();
        const menuItemHasChildren = event.target.parentElement;
        // if menuItemsHasChildren is already expanded, collapse it
        if(menuItemHasChildren.classList.contains('active')){
            collapseSubMenu()
        }else{
            // Collapse existing expandedn 
            // only relevant if there is a second sub menu
            // if(navMenu.querySelector('.menu_item_has_children.active')){
            //     collapseSubMenu()
            // }
            menuItemHasChildren.classList.add('active');
            const subMenu = menuItemHasChildren.querySelector('.sub_menu');
            subMenu.style.maxHeight = subMenu.scrollHeight + 'px';
            } 
        } 
    });

    function collapseSubMenu(){
        // resets max-height to 0
        navMenu.querySelector('.menu_item_has_children.active .sub_menu').removeAttribute('style');
        // resets arrow to original postion
        navMenu.querySelector('.menu_item_has_children.active').classList.remove('active');
    }

function resizeFix(){
    // if navMenu is open close
    if(navMenu.classList.contains('open')){
        toggleNav();
    }
    //if  menuItemHasChildren is expanded collapse it
    if(menuItemHasChildren.classList.contains('active')){
        collapseSubMenu()
    }
}

    window.addEventListener('resize', function(){
       if(this.innerWidth > mediaSize){
        resizeFix();
       } 
    })
})();