import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MinerComponent } from './components/miner/miner.component';
import { BotsComponent } from './components/bots/bots.component';
import { CreateMinerComponent } from './components/creat-miner/create-miner.component';
import { EditMinerComponent } from './components/edit-miner/edit-miner.component';
import { ViewMinerComponent } from './components/view-miner/view-miner.component';

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
    path:'viewMiner/:identifier',
    component:ViewMinerComponent
  },{
    path:'editMiner/:identifier',
    component:EditMinerComponent
  }

]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
