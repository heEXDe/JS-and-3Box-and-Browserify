const ipfsClient = require('ipfs-http-client');
const ipfs = ipfsClient('http://localhost:5001'); // (the default in Node.js)
const BufferList = require('bl/BufferList')
var cid = "future cid"

// ipfs file adding
module.export = async function ipfs_add()
{
  try
  {
    //var files = document.getElementById("fileItem").files;
    //var selected_files =  fileInput.files[0];
    //ipfs_add_file(files[0].content)
    //var a = await ipfs.files.write('/' + files[0].name, files[0].content);
    // options for the dialog box
    fileSelector.click();
    fileSelector.addEventListener('change', (event) => {
      var fileList = event.target.files;
      for (var i = 0; i < fileList.length; i++) {
        var file = fileList[i]
        var reader = new FileReader();
        reader.onload = function(event) {
          console.log(event.target.result);
        }
        reader.readAsText(file)
        ipfs_add_file(reader.readAsText(file))
      }
    });
  } catch (err) {console.error(err);}
}

module.export = async function ipfs_add_file(str){
  for await (const res of ipfs.add(str)) {
    console.log(String(res.cid))
    cid = String(res.cid)
    //ipfs_get(cid)
  }
}

module.export = async function ipfs_get(ipfs_cid){
  for await (const file of ipfs.get(ipfs_cid)) {
    //console.log(file.path)
    if (!file.content) continue;
    const content = new BufferList()
    for await (const chunk of file.content) {
      content.append(chunk)
    }
    console.log(content.toString())
  }
}
