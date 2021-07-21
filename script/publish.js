const ghpages = require('gh-pages');
const execa = require('execa');

execa.commandSync('npx parcel build',{
    stdout: process.stdout
});
ghpages.publish('dist', function(err) {
    if(err) {
        console.log("publish Error", err)
    }
    console.log('publish Success')
});