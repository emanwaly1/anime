import { Injectable } from '@angular/core';
import { Product } from '../DataTypes/product';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {

  constructor() { }
  Product: Product[] = [
    new Product("0", "HP", 90000, "https://i.pinimg.com/236x/55/7f/dc/557fdcda0f14993a65435e6a7d69aafd.jpg", 2),
    new Product("1", "HP", 90000, "https://i.pinimg.com/236x/2a/c1/3b/2ac13b2f968530b9d02601bc8a12ff39.jpg", 3),
    new Product("2", "HP", 90000, "https://i.pinimg.com/236x/d7/a8/54/d7a854056318686cbbde2dd7232d9874.jpg", 1),
    new Product("3", "HP", 90000, "https://i.pinimg.com/236x/6a/66/b0/6a66b06e07a402483990f30c9d32472d.jpg", 5),
    new Product("4", "HP", 90000, "https://i.pinimg.com/236x/fb/b1/49/fbb149ff0e7c5d2d0f643d5fb9176ab2.jpg", 5),
    new Product("10010", "HP", 90000, "https://i.pinimg.com/236x/9f/82/2c/9f822c223eef013bf66a4033b53e8458.jpg", 4),
    new Product("10010", "HP", 90000, "https://i.pinimg.com/236x/ac/84/6e/ac846e04298968af0e8e7afa18186fbb.jpg", 5),
    new Product("10010", "HP", 90000, "https://i.pinimg.com/236x/0b/53/60/0b536070cec288fff7381abbb7db6060.jpg", 5),
    new Product("10010", "HP", 90000, "https://i.pinimg.com/236x/9e/f2/23/9ef22338f0b3caba315fd44d578a760a.jpg", 1),
  ]
  Categories: Array<any> = [
    {
      id: 0,
      name: "All",
      desciption: "This is description"
    },
    {
      id: 1,
      name: "animtions",
      desciption: "This is description"
    },
    {
      id: 2,
      name: "Tablets",
      desciption: "This is description"
    },
    {
      id: 3,
      name: "watermelon",
      desciption: "This is description"
    },
    {
      id: 4,
      name: "draws",
      desciption: "This is description"
    }
  ]


}
