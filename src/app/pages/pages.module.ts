import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PipesModule } from '../pipe/pipes.module';

import { HomeComponent } from './home/home.component';
import { CalendarioComponent } from './calendario/calendario.component';
import { CanchaComponent} from './cancha/cancha.component';
import { EquipoComponent} from './equipo/equipo.component';
import { InfoComponent} from './info/info.component';
import { ReglamentoComponent} from './reglamento/reglamento.component';
import { EquipoDetalleComponent } from './equipo/equipo-detalle/equipo-detalle.component';
import { DetalleCalendarioComponent } from './calendario/detalle-calendario/detalle-calendario.component';
import { TablaComponent } from './tablas/tabla.component';
import { DetallePartidoComponent } from './calendario/detalle-partido/detalle-partido.component';

@NgModule({
  declarations: [
    HomeComponent,
    CalendarioComponent,
    CanchaComponent,
    EquipoComponent,
    InfoComponent,
    ReglamentoComponent,
    EquipoDetalleComponent,
    DetalleCalendarioComponent,
    TablaComponent,
    DetallePartidoComponent
  ],
  exports:[
     HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    PipesModule
  ]
})
export class PagesModule { }
