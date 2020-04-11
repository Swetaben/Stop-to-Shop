import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A test Recipe',
      'This is simply test',
      'https://www.wholesomeyum.com/wp-content/uploads/2016/08/wholesomeyum_taco-salad-2.jpg'
    )
  ];
  constructor() {}

  ngOnInit(): void {}
}
