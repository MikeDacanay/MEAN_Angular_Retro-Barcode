import { Component } from '@angular/core';

var ele: string[] =['red', 'blue','black', 'orange','pink','yellow','green','fuscia'];

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent {
	color: String = ele[Math.floor(Math.random()* 8)];
	color1: String = ele[Math.floor(Math.random()* 8)];
	color2: String = ele[Math.floor(Math.random()* 8)];
	color3: String = ele[Math.floor(Math.random()* 8)];
	color4: String = ele[Math.floor(Math.random()* 8)];
	color5: String = ele[Math.floor(Math.random()* 8)];
}
