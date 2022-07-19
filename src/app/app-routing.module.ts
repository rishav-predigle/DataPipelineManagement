import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MinerComponent } from './components/miner/miner.component';
import { BotsComponent } from './components/bots/bots.component';
import { DefaultComponent } from './components/default/default.component';

const routes: Routes = [{
  path:'',
  component: DefaultComponent,
  children:[{
    path:'',
    component: BotsComponent
  },{
    path:'miner',
    component:MinerComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
