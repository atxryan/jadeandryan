var myfiles = [];
var snippet = '';
var fs = require('fs');

var arrayOfFiles = fs.readdirSync('./photos/');

arrayOfFiles.forEach( function (file) {
    
    snippet += `<figure><img src="photos/${file}" alt="img01" width="300" /></figure>`;
});

fs.writeFile("processoutput.txt", snippet, function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
}); 

console.log(snippet);

