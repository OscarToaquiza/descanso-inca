import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalendarioComponent } from './pages/calendario/calendario.component';
import { DetalleCalendarioComponent } from './pages/calendario/detalle-calendario/detalle-calendario.component';
import { CanchaComponent } from './pages/cancha/cancha.component';
import { EquipoDetalleComponent } from './pages/equipo/equipo-detalle/equipo-detalle.component';
import { EquipoComponent } from './pages/equipo/equipo.component';
import { HomeComponent } from './pages/home/home.component';
import { InfoComponent } from './pages/info/info.component';
import { ReglamentoComponent } from './pages/reglamento/reglamento.component';
import { TablaComponent } from './pages/tablas/tabla.component';
import { DetallePartidoComponent } from './pages/calendario/detalle-partido/detalle-partido.component';

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'calendario', component: CalendarioComponent},
  {path: 'calendario/:id', component: DetalleCalendarioComponent},
  {path: 'calendario/partido/:id', component: DetallePartidoComponent},
  {path: 'equipo', component: EquipoComponent},
  {path: 'equipo/:id', component: EquipoDetalleComponent},
  {path: 'reglamento', component: ReglamentoComponent},
  {path: 'tablas/:id', component: TablaComponent},
  {path: 'cancha', component: CanchaComponent},
  {path: 'info', component: InfoComponent},
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true
  }), ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
