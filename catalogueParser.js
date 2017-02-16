fs = require('fs')
fs.readFile(process.argv[2], {
    encoding: 'utf8',
    normalize: true
}, function(err, data) {
    if (err) {
        return console.log(err);
    }
    console.log(parse(data));
});

function parse(data){
  
  return data;
}
