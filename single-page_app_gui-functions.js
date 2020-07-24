var ipfs_functions = require('./ipfs_functions.js');

// get two first buttons
var btn1 = document.getElementById("btn_1");
var btn2 = document.getElementById("btn_2");

// create elements
var btn_ch_f = document.createElement("button");
var btn_add_to_ipfs = document.createElement("button");
var btn_get_from_ipfs = document.createElement("button");
var btn_h1 = document.createElement("button");
var btn_h2 = document.createElement("button");
var fileSelector = document.createElement('input');

// set text for buttons
btn_ch_f.innerHTML = "Choose file";
btn_add_to_ipfs.innerHTML = "Add to IPFS";
btn_get_from_ipfs.innerHTML = "Get from IPFS";
btn_h1.innerHTML = "Home";
btn_h2.innerHTML = "Home";

// set id for elements
btn_ch_f.setAttribute("id", "btn_ch_f");
btn_add_to_ipfs.setAttribute("id", "btn_ipfs_add");
btn_get_from_ipfs.setAttribute("id", "btn_ipfs_get");
btn_h1.setAttribute("id", "btn_h1");
btn_h2.setAttribute("id", "btn_h2");
fileSelector.setAttribute("id", "fileItem");

// set fileSelector type
fileSelector.setAttribute('type', 'file');

// set fileSelector for multiple files
fileSelector.setAttribute('multiple', 'multiple');

// set onclick events for buttons
btn_ch_f.onclick = function(){choose_file()};
btn_add_to_ipfs.onclick = function(){ipfs_add()};
btn_get_from_ipfs.onclick = function(){ipfs_get(cid)};
btn_h1.onclick = function(){to_home_from_add()};
btn_h2.onclick = function(){to_home_from_download()};


// function to clean up previous page & set up elements of 'to ipfs' page
function add_file_page(){
  // replace old buttons with the new ones
  div_1.replaceChild(btn_add_to_ipfs, btn1);
  div_2.removeChild(btn2);
  div_3.appendChild(btn_h1);
}

// function to clean up previous page & set up elements of 'from ipfs' page
function download_file_page(){
  div_1.replaceChild(btn_get_from_ipfs, btn1);
  div_2.replaceChild(btn_h2, btn2);
}

// function to clean up previous page & set up elements of 'home' page from 'to ipfs'
function to_home_from_add(){
  div_1.replaceChild(btn1, btn_add_to_ipfs);
  div_2.appendChild(btn2);
  div_3.removeChild(btn_h1);
}

// function to clean up previous page & set up elements of 'home' page from 'from ipfs'
function to_home_from_download(){
  div_1.replaceChild(btn1, btn_get_from_ipfs);
  div_2.replaceChild(btn2, btn_h2);
}
