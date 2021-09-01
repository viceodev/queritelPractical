let loader = document.querySelector('div#loader');

let initialize_loader = function(){
    loader.classList.remove('d-none');
}


let kill_loader = function(){
    loader.classList.add('d-none');
}


export {initialize_loader, kill_loader}