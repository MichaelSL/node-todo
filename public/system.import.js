System.import('angular')
.then(function(ng){
    return System.import('js/boot.js');
})
.catch(console.error.bind(console));