import { Injectable } from '@angular/core';

@Injectable()
export class TimeZonesService {
    getCities(): any {
        return [
            {
                name: 'London',
                zone: 'GMT'
            },
            {
                name: 'Budapest',
                zone: 'GMT+1'
            },
            {
                name: 'Kiev',
                zone: 'GMT+2'
            }
        ];
    }
}