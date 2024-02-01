import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductListService } from './Services/product-list.service';
import { MoneyPipe } from './pipes/money.pipe';
import { LoaderService } from './Services/Interceptors/loader.Interceptor';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  title = 'anime';
  toLoad=false
  constructor(private loaderServ:LoaderService){

this.loaderServ.isLoaded.subscribe((data: boolean)=>{
  this.toLoad=data
})
  }}
