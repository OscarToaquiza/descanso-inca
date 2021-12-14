import { Component } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})

export class HeaderComponent {

  showMainContent: Boolean = true;
  constructor() {}

  ShowHideButton() {
    this.showMainContent = this.showMainContent ? false : true;
 }
}
