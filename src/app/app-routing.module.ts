import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MinerComponent } from './components/miner/miner.component';
import { BotsComponent } from './components/bots/bots.component';
import { CreateMinerComponent } from './components/creat-miner/create-miner.component';
import { EditMinerComponent } from './components/edit-miner/edit-miner.component';
import { ViewMinerComponent } from './components/view-miner/view-miner.component';
import { ParameterComponent } from './components/parameter/parameter.component';
import { ViewParamComponent } from './components/view-param/view-param.component';
import { CreateParamComponent } from './components/create-param/create-param.component';
import { EditParamComponent } from './components/edit-param/edit-param.component';
import { DataStageComponent } from './components/data-stage/data-stage.component';
import { ViewStageComponent } from './components/view-stage/view-stage.component';
import { EditStageComponent } from './components/edit-stage/edit-stage.component';


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
  },{
    path:'parameter',
    component:ParameterComponent
  },{
    path:'viewParameter/:identifier',
    component:ViewParamComponent  
  },{
    path:'createParameter',
    component:CreateParamComponent  
  },{
    path:'editParam/:identifier',
    component:EditParamComponent  
  },{
    path:'dataStage',
    component:DataStageComponent  
  },{
    path:'viewDataStage/:identifier',
    component:ViewStageComponent  
  },
  {
    path:'editStage/:identifier',
    component:EditStageComponent  
  }

  

  
  
  
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
