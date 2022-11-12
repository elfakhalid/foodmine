import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/models/Food';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  foods: Food[] = [];
  constructor(
    private foodService: FoodService,
    activatedRoute: ActivatedRoute
  ) {
    activatedRoute.params.subscribe((params) => {
      let foodsObservable: Observable<Food[]>;
      if (params.searchTerm)
        foodsObservable = this.foodService.getFoodBySearchTerm(
          params.searchTerm
        );
      else if (params.tag)
        foodsObservable = this.foodService.getAllFoodsByTag(params.tag);
      else foodsObservable = foodService.getAll();

      foodsObservable.subscribe((serverFoods) => {
        this.foods = serverFoods;
      });
    });
  }

  ngOnInit(): void {}
}
