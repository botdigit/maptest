import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title: string = 'agm playogroud';
    lat: number = 34.070152;
    lng: number = -118.349747;
    zoom : number = 12;
    rotateOptions =  {
	position: 'BOTTOM-LEFT',
	MapTypeId : 'SATELLITE',
    };
    mapTypeControl = true;
    isOpen : boolean = false;
    constructor(){
    }
    mapclick(event){
	console.log(event);
	event.coords.lat;
        event.coords.lng}
}
