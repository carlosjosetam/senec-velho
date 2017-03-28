import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Atividade } from '../shared/atividade.model';
import { AtividadeService } from '../shared/atividade.service';
import { Subscription } from 'rxjs/Subscription';
import { AtividadeCardComponent } from '../shared/atividade-card/atividade-card.component';
import { SearchInputService } from '../../shared/search-input/search-input.service';

@Component({
  moduleId: module.id,
  selector: 'atividade-grid',
  templateUrl: 'atividade-grid.component.html',
  styleUrls: ['atividade-grid.component.css'],
})

export class AtividadeGridComponent implements OnInit, OnDestroy {
  
  private atividades: Atividade[];
  private atividadesFiltradas: Atividade[]
  private loading: boolean = true;
  private over = false;
  private selectedVisible = "none";
  private selectedFilter = "Semana";
  private searchSubscription: Subscription;

  constructor(
    
    private atividadeService: AtividadeService,
    private router: Router,
    private searchTerm: SearchInputService

  ) { }

  gotoDetail(atividade: Atividade): void {
    this.router.navigate(['/atividades/', atividade.id]);
  }
  
  getAtividades(): void {
    this.atividadeService.getAtividades().then(atividades => {
      this.atividades = atividades.sort(this.compare);
      this.loading = false;
      this.atividadesFiltradas = this.atividades.slice();
      this.searchSubscription = this.searchTerm.searchTerm$.subscribe(value => {
        this.atividadesFiltradas = this.atividades.filter(a => {
          let valueLower = value.toLowerCase();
          let titulo = a.titulo.toLowerCase();
          if (titulo.indexOf(valueLower) != -1) {
            return true;
          }
        });
      })
    });
  }
  
  ngOnInit(): void {
    this.getAtividades();
  }

  ngOnDestroy() {
    if (this.searchSubscription) this.searchSubscription.unsubscribe();
  }
  
  add(titulo: string): void {
    titulo = titulo.trim();
    if (!titulo) { return; }
    this.atividadeService.create(titulo)
      .then(atividade => {
        this.atividades.push(atividade);
      });
  }
  delete(atividade: Atividade): void {
    this.atividadeService
        .delete(atividade.id)
        .then(() => {
          this.atividades = this.atividades.filter(a => a !== atividade);
        });
  }
  compare(a: Atividade,b: Atividade) {
    if (a.inicioAtividade < b.inicioAtividade) return -1;
    if (a.inicioAtividade > b.inicioAtividade) return 1;
    return 0;
  } 
  getQtdPalestras(): number {
    return this.atividadesFiltradas.filter(a => a.tipo == "Palestra").length;
  }
  getQtdWorkshops(): number {
    return this.atividadesFiltradas.filter(a => a.tipo == "Workshop").length;
  }
  getQtdVisitas(): number {
    return this.atividadesFiltradas.filter(a => a.tipo == "Visita técnica").length;
  }
  getQtdOutros(): number {
    return this.atividadesFiltradas.filter(a => a.tipo == "Outros").length;
  }
  getQtdFavoritas(): number {
    return 15;
    //this.atividadesFiltradas.filter(a => {
      //if (!a.favorita) return false;
    //  return 15; //ainda preciso colocar o numero de favourites
    //}).length;
  }
  getTotalAtividades(): number {
     return this.atividadesFiltradas.filter(a => {
      if (this.selectedVisible != a.tipo && this.selectedVisible != 'none') return false;
      return true;
    }).length; 
  }
  toggleVisibilityPalestra(): void {
    if (this.selectedVisible != "Palestra") this.selectedVisible = "Palestra";
    else this.selectedVisible = "none";
  }
  toggleVisibilityWorkshop(): void {
    if (this.selectedVisible != "Workshop") this.selectedVisible = "Workshop";
    else this.selectedVisible = "none";
  }
  toggleVisibilityVisita(): void {
    if (this.selectedVisible != "Visita técnica") this.selectedVisible = "Visita técnica";
    else this.selectedVisible = "none";
  }
  toggleVisibilityOutros(): void {
    if (this.selectedVisible != "Outros") this.selectedVisible = "Outros";
    else this.selectedVisible = "none";
  }
  toggleVisibilityFavoritas(): void {
    if (this.selectedVisible != "Favoritas") this.selectedVisible = "Favoritas";
    else this.selectedVisible = "none";
  }

  matchFilter(atividade: Atividade): boolean {
    if (this.selectedFilter == 'Semana') return true;
    if (this.selectedFilter == 'Dia') {
      if (atividade.pontos == '500') return true;
      return false;
    }
    if (this.selectedFilter == 'Talvez' && !atividade.confirmed) return true;
    return false;
  }
}