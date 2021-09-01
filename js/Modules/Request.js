import * as DomHandler from './dom_handler.js';
import * as Loader from './Loader.js';

const ACTION_GET_LOCATIONS = "get_demo_locations";
const ACTION_GET_USER_LIST = "get_user_list";
const BASE_URL = 'https://api.queritel.com/api/general/demo_api/demo_api.php';

const param_json = 
{
    "user_token": "mku-djgggdlndg3fso-75664-djjxg"
}

let  api_request = function (url,action,param_json,callback) {
    Loader.initialize_loader();

    var xmlHttpReq = undefined;

    if (window.XMLHttpRequest) {
        xmlHttpReq = new XMLHttpRequest();
    }
    else if (window.ActiveXObject) {
        // IE
        xmlHttpReq = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xmlHttpReq.open("POST", url, true);
    xmlHttpReq.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xmlHttpReq.onload = function() {

        if (xmlHttpReq.readyState == 4)
        {

            if(xmlHttpReq.status != 200){
                Loader.kill_loader();
                alert("POST request failed at : " + url);
                return;
            }else{
                callback(xmlHttpReq.responseText);
                Loader.kill_loader();
            }

            
        }
        else
        {
            Loader.kill_loader();
            alert("POST request failed at : " + url);
        }
    }

    var postData = "action=" + action + "&param_json=" + param_json;

    xmlHttpReq.send(postData);
    
}

let request_for_address =  async function(){
    let response = api_request(BASE_URL, ACTION_GET_LOCATIONS, JSON.stringify(param_json), DomHandler.handle_address_list);
    
}


let request_for_users = async function(){
    let response =  api_request(BASE_URL, ACTION_GET_USER_LIST, JSON.stringify(param_json), DomHandler.handle_user_list)
}


export { request_for_address, request_for_users } 