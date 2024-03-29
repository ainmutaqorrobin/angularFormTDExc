import { Component, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  @ViewChild("form") form: NgForm;
  subscriptions = ["Basic", "Advanced", "Pro"];
  choosedSubscription = "Advanced";

  onSubmit() {
    console.log(this.form.value);
  }
}
