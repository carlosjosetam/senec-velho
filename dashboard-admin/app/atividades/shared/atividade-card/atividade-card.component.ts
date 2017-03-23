import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Atividade } from '../../shared/atividade.model';
import { MdDialog, MdDialogRef } from '@angular/material';
import { VisibilityConfirmationComponent } from '../confirmation-dialogs/visibility-confirmation.component';
import { LockConfirmationComponent } from '../confirmation-dialogs/lock-confirmation.component';
import { MdSnackBar } from '@angular/material';
import { AtividadeService } from '../../shared/atividade.service';

@Component({
	moduleId: module.id,
	selector:'atividade-card',
	templateUrl: 'atividade-card.component.html',
	styleUrls: ['atividade-card.component.css']
})

export class AtividadeCardComponent {

    
	constructor(public dialog: MdDialog, private snackBar: MdSnackBar, private atividadeService: AtividadeService) {}

	private over = false;
	private loading = false;
	@Input() atividade: Atividade;

	getCardColor(): string {
	    const colorMap = {
	      "Palestra": "palestra",
	      "Workshop": "workshop",
	      "Visita técnica": "visita",
	      "Outros": "outros"
	    }
	    if (colorMap[this.atividade.tipo]) return colorMap[this.atividade.tipo];
	    return null;
	}

	setOver(value: boolean): void {
	    this.over = value;
  	}

	isLocked(): boolean {
		let inicio = new Date(this.atividade.inicioInscricao);
		let fim = new Date(this.atividade.terminoInscricao);
		let now = new Date();

		return !( (inicio.getTime() <= now.getTime() ) && ( now.getTime() <= fim.getTime() ) );
	}

	openVisibilityConfirmation() {
	    let dialogRef = this.dialog.open(VisibilityConfirmationComponent);
	    dialogRef.componentInstance.atividade = this.atividade;
	    dialogRef.afterClosed().subscribe(result => {
	      if (result === true) this.toggleVisibility();
	    });
	}

	openLockConfirmation() {
	    let dialogRef = this.dialog.open(LockConfirmationComponent);
	    dialogRef.componentInstance.atividade = this.atividade;
	    dialogRef.afterClosed().subscribe(result => {
	      if (result) {
	        if(result.confirmation) this.toggleLocked(dialogRef.componentInstance.newDate,dialogRef.componentInstance.newTime);
	       }
	    });
	}

	toggleVisibility(): void {
		let value = !this.atividade.visivel;
		let msg: string = `A atividade "${this.atividade.titulo.substr(0,60)}`;
		if (this.atividade.titulo.length > 60) msg = msg + "...";
		if (value) {
      		this.handleChange('visivel',value,msg + `" agora está visível.`);
		}
		else {
      		this.handleChange('visivel',value,msg + `" agora está invisível.`);
		}
	}

	toggleLocked(newTerminoDate?: Date, newTerminoTime?: Date): void {
	    let now = new Date();
	    let value: any;
	    let msg: string;
	    
		if (this.isLocked()) {
			msg = `Você abriu as inscrições da atividade "${this.atividade.titulo.substr(0,60)}`;
	    	if (this.atividade.titulo.length > 60) msg = msg + `..."`;
	    	else msg = msg + `"`;

			if (now < new Date(this.atividade.inicioInscricao)) {
	        	value = now;
	        	this.handleChange("inicioInscricao", value, msg);
	    	}
			else {
		        let termino = new Date(newTerminoDate);
		        termino.setHours(newTerminoTime.getHours());
		        termino.setMinutes(newTerminoTime.getMinutes());
		        value = termino;
		        this.handleChange("terminoInscricao", value, msg);
	    	}
		}
		else {
			value = now;
			msg = `Você fechou as inscrições da atividade "${this.atividade.titulo.substr(0,60)}`;
			if (this.atividade.titulo.length > 60) msg = msg + `..."`;
			else msg = msg + `"`;
	    	this.handleChange("terminoInscricao",value,msg);        
		}
	}

	confirm(): void {
  		let msg = `Você confirmou a atividade "${this.atividade.titulo.substr(0,60)}`;
  		if (this.atividade.titulo.length > 60) msg = msg + `..."`;
  		let value = true;
  		this.handleChange("confirmed",value,msg);
  	}

  	handleChange(property: string, value: any, msg: string) {
  		this.loading = true;
  		let oldValue = this.atividade[property];
  		let newAtividade = new Atividade(this.atividade);
  		newAtividade[property] = value;
	    this.atividadeService
	      	.update(newAtividade)
	      	.then( () => {
	      		this.loading = false;
	      		this.atividade[property] = value;
	      	})
	      	.then( () => {
	      		let snackBarRef: any = this.snackBar.open(msg,'Desfazer', 
	        		{duration: 4000, extraClasses: ['snackbar']});

		    	snackBarRef.onAction().subscribe( () => {
					this.loading = true;
					newAtividade[property] = oldValue;							
		  			this.atividadeService
		  			.update(newAtividade)
		  			.then( () => {
		  				this.loading = false;
		  				this.atividade[property] = oldValue;
		  			});
        		});
	      	});
  	}
  	hasDepencies(): boolean {
  		for (var property in this.atividade) {
  			if (this.atividade.hasOwnProperty(property)) {
  				if (!this.atividade[property].toString().length) return true; 
  			}
  		}
  		return false;
  	}
}