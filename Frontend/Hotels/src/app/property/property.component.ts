import { Component, OnInit } from '@angular/core';
import { PropertiesService } from '../properties.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit {

  properties: any = [];

  constructor(public property: PropertiesService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getProperties();
  }

  getProperties() {
    this.properties = [];
    this.property.getAllProperties().subscribe((data: {}) => {
      this.properties = data;
      console.log(data);
    });
  }
}
