import { Component, OnInit } from '@angular/core';
import { PropertiesService, Property } from '../properties.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-property-view',
  templateUrl: './property-view.component.html',
  styleUrls: ['./property-view.component.css']
})
export class PropertyViewComponent implements OnInit {

  constructor(public property: PropertiesService, private route: ActivatedRoute, private router: Router) { }

  prop: any;

  ngOnInit() {
    this.property.getProperty(this.route.snapshot.params['id']).subscribe((data: {}) => {
      this.prop = data;
      console.log(data);
    });
  }

}

