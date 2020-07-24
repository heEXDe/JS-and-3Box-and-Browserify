//require file system module to handle files
const fs = require('fs');
// require module for futher access to the dialog box
const { dialog } = require('electron');

function choose_file() {
  // options for the dialog box
  let options = {
    title: 'choose a file',
    properties: ['openFile','multiSelections']
  };
  // open dialog box
  var files = dialog.showOpenDialog(options);
  // what to do with the selected file/files
  files.then(result => {
    console.log(result.filePaths);
    var file_paths = result.filePaths;
    for (var i = 0; i < result.filePaths.length; i++) {
      fs.readFile(file_paths[i], 'utf-8', (err, data) => {
        if (err) throw err;
        console.log(data);
      });
    }
  }).catch(err => {console.log(err);});
}
