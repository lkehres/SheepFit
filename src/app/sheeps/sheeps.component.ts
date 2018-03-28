import { Component, OnInit } from '@angular/core';
import { Animal } from '../sheeps/animal';
import { SHEEPS } from '../sheeps/mock-animal-service'

@Component({
  selector: 'app-sheeps',
  templateUrl: './sheeps.component.html',
  styleUrls: ['./sheeps.component.css']
})
export class SheepsComponent implements OnInit {
  sheeps = SHEEPS;
 
  constructor() { }

  ngOnInit() {}

};