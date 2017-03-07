(function (global) {
    let packages = {
        js:{
            defaultExtension: 'js'
        },
        jslibs: {
            defaultExtension: 'js'
        }
        
    };

    var ngPackageNames = [
        "core",
        "common",
        "compiler",        
        "platform-browser",
        "platform-browser-dynamic",
        "upgrade"
    ];

    ngPackageNames.forEach(
        function iterator( packageName ) {

            packages[ "@angular/" + packageName ] = {
                main: '/bundles/' + packageName + '.umd.js'
                // ,
                // defaultExtension: "js"
            };

        }
    );

    packages[ "@angular/upgrade/static" ] = {
                main: '../bundles/upgrade-static.umd.js'
            };

    packages["rxjs"] = {
        main: '/bundles/Rx.js'
    };

    System.config({
        packages: packages,
        paths: {
            'angular': 'jslibs/angular/angular.min.js',
            'Zone': 'jslibs/zone.js/dist/zone.js',
            'reflect-metadata': 'jslibs/reflect-metadata/Reflect.js'
        },
        map: {
            '@angular': 'jslibs/@angular',
            'rxjs': 'jslibs/rxjs'
        },
        shim: {
            'angular': {
                exports: 'angular'
            },
            'Zone': {
                exports: 'Zone'
            },
            'reflect-metadata':{
                exports: 'reflect-metadata'
            }
        }
    });
})(this);