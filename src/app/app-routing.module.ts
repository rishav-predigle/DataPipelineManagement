import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MinerComponent } from './components/miner/miner.component';
import { BotsComponent } from './components/bots/bots.component';
import { CreateMinerComponent } from './components/creat-miner/create-miner.component';

// const routes: Routes = [{
//   path:'',
//   component: DefaultComponent,
//   children:[{
//     path:'',
//     component: BotsComponent
//   },{
//     path:'miner',
//     component:MinerComponent,
//     children:[{
//       path:'createMiner',
//       component:CreateMinerComponent
//     }]
//   }]
// }];
const routes : Routes = [{
    path:'',
    component:BotsComponent
  },{
    path:'miner',
    component:MinerComponent
  },{
    path:'createMiner',
    component:CreateMinerComponent
  },{
    path:'viewMiner',
    component:CreateMinerComponent
  }

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
