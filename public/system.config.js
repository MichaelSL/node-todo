(function (global) {
    let packages = {
        // js:{
        // 	format: 'register',
        // 	defaultExtension: 'js'
        // },
        js:{
            defaultExtension: 'js'
        },
        jslibs: {
            defaultExtension: 'js'
        }
    };

    var ngPackageNames = [
        "common",
        "compiler",
        "core",
        "http",
        "platform-browser",
        "platform-browser-dynamic",
        "router",
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

    System.config({
        packages: packages,
        paths: {
            'angular': 'jslibs/angular/angular.min.js',
            'Zone': 'jslibs/zone.js/dist/zone.js',
            'reflect-metadata': 'jslibs/reflect-metadata/Reflect.js',
            'rxjs': 'jslibs/rxjs/rx.js'
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
            },
            'rxjs': {
                exports: 'rxjs'
            }
        }
    });
})(this);