import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  FOODS_BY_ID,
  FOODS_BY_SEARCH_URL,
  FOODS_BY_TAGS_URL,
  FOODS_TAGS_URL,
  FOODS_URL,
} from 'src/app/shared/constants/urls';
import { Observable } from 'rxjs';
import { sample_foods, sample_tags } from 'src/data';
import { Food } from '../shared/models/Food';
import { Tag } from '../shared/models/Tag';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Food[]> {
    return this.http.get<Food[]>(FOODS_URL);
  }

  getFoodBySearchTerm(searchTerm: string): Observable<Food[]> {
    return this.http.get<Food[]>(FOODS_BY_SEARCH_URL + searchTerm);
  }

  getAllTags(): Observable<Tag[]> {
    return this.http.get<Tag[]>(FOODS_TAGS_URL);
  }

  getAllFoodsByTag(tag: string): Observable<Food[]> {
    return tag === 'All'
      ? this.getAll()
      : this.http.get<Food[]>(FOODS_BY_TAGS_URL + tag);
  }

  getFoodBiId(foodId: string): Observable<Food> {
    return this.http.get<Food>(FOODS_BY_ID + foodId);
  }
}
