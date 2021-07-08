import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  //Alias to custom properties
  @Input('sElement') element: { type: string; name: string; content: string };
  constructor() {}

  ngOnInit(): void {}
}
