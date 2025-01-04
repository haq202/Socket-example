import { Component } from '@angular/core';
import { DocumentListComponent } from './components/document-list/document-list.component';
import { DocumentComponent } from './components/document/document.component';
import { DocumentService } from './services/document.service';
import { FormsModule } from '@angular/forms';
import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    DocumentListComponent,
    DocumentComponent,
    FormsModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'socket-app';
}
