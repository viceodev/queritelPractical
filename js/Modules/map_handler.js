import * as ResolvedData from './dom_handler.js';

let hook_event_listener = function(){
    let links = document.querySelectorAll('a#list_item');
    let id,type,current_item;

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            id = link.getAttribute('data-id');
            type = link.getAttribute('data-type');

            // Handle map functions 
            console.log('This is the file that handles the map info')
            console.log(ResolvedData.resolvedLocationDataForMapUse, ResolvedData.resolvedUserDataForMapUse);
        })
    })
}


export {hook_event_listener}