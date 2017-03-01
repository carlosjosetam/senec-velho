import { Component } from '@angular/core';
import { MdDialogRef } from '@angular/material';
import { Atividade } from '../../../shared/atividade.model';

@Component({
  moduleId: module.id,
  selector: 'visibility-confirmation',
  templateUrl: 'visibility-confirmation.component.html'
})

export class VisibilityConfirmationComponent {

  constructor(public dialogRef: MdDialogRef<VisibilityConfirmationComponent>) {}

  atividade: Atividade;
}