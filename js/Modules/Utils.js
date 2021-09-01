import * as Request from './Request.js';

let handle_menu_changer = async function(){
    if(document.querySelectorAll('a#special_link')){
        let links = document.querySelectorAll('a#special_link');

        let clearActives = function(){
                links.forEach(link => {
                link.classList.remove('active');
            })
        }
        
        links.forEach(link => {
            
            link.addEventListener('click', (e) => {
                clearActives();
                Request[link.getAttribute('data-target')]();
                link.classList.add('active');
            });
        })
    }
}    




export { handle_menu_changer }