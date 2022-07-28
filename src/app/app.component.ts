import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-task-reminder';

  sample1 = 'Sample Value 1';

  sample2 = 'Default';

  sampleEpochDate = 1659003976000;

  sampleNames = ['Aini Heber', 'Nechtan Atreus', 'Sadhbh Mokosh', 'Kyllikki'];

  sampleToggle = false;

  sampleDecimal = 4.68123413243;

  sampleMoney = 14560;

  samplePercentValue = 0.45;

  callAlert() {
    alert('Current Date Time: ' + new Date().toString())
  }

  avatarClicked($event: any) {
    alert($event);
  }
}
