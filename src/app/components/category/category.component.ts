import {Component, OnInit} from "@angular/core";
import {Category} from "./service/category";
import {Router} from "@angular/router";
import {CategoryService} from "./service/category.service";

@Component({
  selector: 'app-category',
  templateUrl: 'category.component.html',
  styleUrls: ['category.component.css']
})
export class CategoryComponent implements OnInit {
  categories: Category[];

  constructor(private categoryService: CategoryService,
              private router: Router) {
  }

  getCategories(): void {
    this.categoryService
      .getCategories()
      .then(categories => this.categories = categories);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.categoryService.create(name)
      .then(category => {
        this.categories.push(category);
      });
  }

  delete(category: Category): void {
    this.categoryService
      .delete(category.id)
      .then(() => {
        this.categories = this.categories.filter(h => h !== category);
      });
  }

  ngOnInit(): void {
    this.getCategories();
  }
}
