import * as MapHandler from './map_handler.js';

let domList = document.querySelector('div#info');

let resolvedLocationDataForMapUse = {};
let resolvedUserDataForMapUse = {};

let handle_address_list =  function(response){
    let list =  JSON.parse(response).location_list;
    domList.innerHTML = "";

    list.forEach(item => {
        resolvedLocationDataForMapUse[item.address_id] = item;

        domList.innerHTML += `
            <a href="" id="list_item" data-type="location">
                <div class="card">
                    <p>${item.address}</p>
                    <p>Users Total: ${item.users_required}</p>
                    <p>Users Count: ${item.users_available}</p>
                    <p>Total Submission: ${item.submissions_total}</p>
                    <p>Completed Submission: ${item.submissions_completed}</p>
                </div>                        
            </a>
        `;
    })

    // Hook Event listener to data gotten from api
    MapHandler.hook_event_listener();
}


let handle_user_list =  function(response){
    let list =  JSON.parse(response).user_list;
    
    domList.innerHTML = "";

    list.forEach(item => {
        resolvedUserDataForMapUse[item.user_id] = item;

        domList.innerHTML += `
            <a href="" id="list_item" data-type="user">
                <div class="card">
                    <p>Username: ${item.fname} ${item.lname}</p>
                    <p>Number Of Location: ${item.location_list.length}</p>
                    <p>Total Submission: ${item.submissions_total}</p>
                    <p>Completed Submission: ${item.submissions_completed}</p>
                </div>                        
            </a>
        `;
    })

    // Hook Event listener to data gotten from api
    MapHandler.hook_event_listener();
}

export {handle_address_list, handle_user_list, resolvedLocationDataForMapUse, resolvedUserDataForMapUse}