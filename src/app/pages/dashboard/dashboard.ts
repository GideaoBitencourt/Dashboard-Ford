import { Component } from '@angular/core';
import { Campo } from "../../components/campo/campo";
import { Login } from "../login/login";
import { Menu } from "../../components/menu/menu";


@Component({
  selector: 'app-dashboard',
  imports: [Campo, Login, Menu],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {

}
