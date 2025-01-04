import { Component, OnDestroy, OnInit } from '@angular/core';
import { Document } from '../../models/document.model';
import { startWith, Subscription } from 'rxjs';
import { DocumentService } from '../../services/document.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-document',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './document.component.html',
  styleUrl: './document.component.scss',
  providers: [DocumentService],
})
export class DocumentComponent implements OnInit, OnDestroy {
  document!: Document;
  private _docSub!: Subscription;

  constructor(private documentService: DocumentService) {}

  ngOnInit() {
    this._docSub = this.documentService.currentDocument
      .pipe(
        startWith({
          id: '',
          doc: 'Select an existing document or create a new one to get started',
        })
      )
      .subscribe((document: any) => (this.document = document));
  }

  ngOnDestroy() {
    this._docSub.unsubscribe();
  }

  editDoc() {
    this.documentService.editDocument(this.document);
  }
}
