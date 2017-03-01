import { Component, Input, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';
import { Atividade } from '../../../shared/atividade.model';

@Component({
  moduleId: module.id,
  selector: 'lock-confirmation',
  templateUrl: 'lock-confirmation.component.html'
})

export class LockConfirmationComponent implements OnInit  {

  	constructor(public dialogRef: MdDialogRef<LockConfirmationComponent>) { }

	  @Input() atividade: Atividade;
    newDate: Date;
    newTime: Date;
    min: Date;
    max: Date;

    ngOnInit() {
      this.newDate = new Date(this.atividade.inicioAtividade);
      this.newTime = new Date(this.atividade.inicioAtividade);
      this.min = new Date();
      this.max = new Date(this.atividade.inicioAtividade);
    }

  	isLocked(): boolean {
  		let inicio = new Date(this.atividade.inicioInscricao);
  		let fim = new Date(this.atividade.terminoInscricao);
  		let now = new Date();

  		return !( (inicio.getTime() <= now.getTime() ) && ( now.getTime() <= fim.getTime() ) );
  	}

  	now(): Date {
  		return new Date();
  	}

    getDateTime(dateTime: string): Date {
      return new Date(dateTime)
    }
}