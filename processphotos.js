var myfiles = [];
var snippet;
var fs = require('fs');

var arrayOfFiles = fs.readdirSync('./photos/');

//Yes, the following is not super-smart, but you might want to process the files. This is how:
arrayOfFiles.forEach( function (file) {
    myfiles.push(file);
    
    snippet += `<figure>
    <img src="photos/${file}" alt="img01" width="240" />
    <figcaption>
        <h2 class="photostack-title"></h2>
    </figcaption>
    </figure>`
});
console.log(myfiles);
console.log(snippet);

