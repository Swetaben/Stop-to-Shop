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
      'https://3mvrqp3ziq5p3en1rkl04ht1-wpengine.netdna-ssl.com/wp-content/plugins/chef/public/img/logo-chef-horizontal.png'
    ),
    new Recipe(
      'A test Recipe2',
      'This is simply test2',
      'https://3mvrqp3ziq5p3en1rkl04ht1-wpengine.netdna-ssl.com/wp-content/plugins/chef/public/img/logo-chef-horizontal.png'
    )
  ];
  constructor() {}

  ngOnInit(): void {}
}
