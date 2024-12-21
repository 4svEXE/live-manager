import { Injectable, signal } from '@angular/core';
import { StorageService } from './storage-service.service';
import { mockCategories } from '../../mockData/mockCategories';
import Category from '../../interfaces/Category';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private readonly STORAGE_KEY = 'categories';
  private _categories = signal<Category[]>(mockCategories);

  constructor(private storageService: StorageService) {
    this.initData();
  }

  initData() {
    const storedCategories = this.storageService.getData(this.STORAGE_KEY);
    this.setCategories(storedCategories || mockCategories);
  }

  getCategories(): Category[] {
    return this._categories();
  }

  setCategories(categories: Category[]) {
    this._categories.set(categories);
    this.storageService.saveData(this.STORAGE_KEY, categories);
  }

  getCategoryById(id: string): Category | undefined {
    return this.getCategories().find((category) => category._id === id);
  }

  addCategory(category: Category): void {
    const unicId = this.storageService.generateUniqueId('category');

    const updatedCategories = [
      ...this.getCategories(),
      { ...category, _id: unicId },
    ];
    this.setCategories(updatedCategories);
    this.storageService.saveData(this.STORAGE_KEY, updatedCategories);
  }
}
