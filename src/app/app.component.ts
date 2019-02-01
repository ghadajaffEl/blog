import { Component } from '@angular/core';
import {Post} from './post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'blog';
  posts = [new Post('Mon premier post', 'Lorem ipsum dolor sit amet,' +
      ' consectetur adipiscing elitsed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' +
      'Ut enim ad minim veniamquis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'),
  new Post('Mon deuxième post', 'Lorem ipsum dolor sit amet,' +
      ' consectetur adipiscing elitsed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' +
      'Ut enim ad minim veniamquis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'),
      new Post('Mon troixième post', 'Lorem ipsum dolor sit amet,' +
          ' consectetur adipiscing elitsed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' +
          'Ut enim ad minim veniamquis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat')
  ];
}
