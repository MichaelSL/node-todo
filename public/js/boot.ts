import {UpgradeAdapter} from '@angular/upgrade';
import {HelloAngular2} from './components/hello-angular2';

var adapter = new UpgradeAdapter();

app.directive('helloAngular2', adapter.downgradeNg2Component(HelloAngular2));

adapter.bootstrap(document.body, ['scotchTodo']);