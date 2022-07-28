import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.css']
})
export class AvatarComponent implements OnInit {
  @Input() name = '';
  @Output() clicked: EventEmitter<string> = new EventEmitter(true);

  constructor() { }

  ngOnInit(): void {
  }

  clickAvatar(value: string) {
    this.clicked.emit(value);
  }

}
