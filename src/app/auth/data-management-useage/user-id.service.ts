import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

// import { Ingredient } from '../shared/ingredient.model';
// import { ShoppingListService } from '../shopping-list/shopping-list.service';

import { User } from './user.model';

@Injectable()
export class UserIdService {
  theUser = new Subject<User[]>();

  private users: User[] = [
    new User(
      'Andrew',
      'Peliza',
      1394854,
      ['Computing', 'Art']
      )
  ];

  // constructor(private slService: ShoppingListService) {}
  storeUserId() {
    return this.users.slice();
  }

  setUserId(users: User[]) {
    this.users = users;
    this.theUser.next(this.users.slice());
  }
  //
  // getRecipe(index: number) {
  //   return this.recipes[index];
  // }
  //
  // addIngredientsToShoppingList(ingredients: Ingredient[]) {
  //   this.slService.addIngredients(ingredients);
  // }
  //
  // addRecipe(recipe: Recipe) {
  //   this.recipes.push(recipe);
  //   this.recipesChanged.next(this.recipes.slice());
  // }
  //
  // updateRecipe(index: number, newRecipe: Recipe) {
  //   this.recipes[index] = newRecipe;
  //   this.recipesChanged.next(this.recipes.slice());
  // }
  //
  // deleteRecipe(index: number) {
  //   this.recipes.splice(index, 1);
  //   this.recipesChanged.next(this.recipes.slice());
  // }
}
