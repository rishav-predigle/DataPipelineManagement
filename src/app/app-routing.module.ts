import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MinerComponent } from './components/miner/miner.component';
import { BotsComponent } from './components/bots/bots.component';
import { ParameterComponent } from './components/parameter/parameter.component';
import { DataStageComponent } from './components/data-stage/data-stage.component';
import { DataSourceComponent } from './components/data-source/data-source.component';
import { CreateDataSourceComponent } from './components/data-source/create-data-source/create-data-source.component';
import { DataEntityComponent } from './components/data-entity/data-entity.component';
import { CreateEntityComponent } from './components/data-entity/create-entity/create-entity.component';
import { DataSetComponent } from './components/data-set/data-set.component';
import { ManageDataSetComponent } from './components/data-set/manage-data-set/manage-data-set.component';
import { ManageDataStageComponent } from './components/data-stage/manage-data-stage/manage-data-stage.component';
import { ManageParameterComponent } from './components/parameter/manage-parameter/manage-parameter.component';
import { ManageBotComponent } from './components/bots/manage-bot/manage-bot.component';
import { ManageMinerComponent } from './components/miner/manage-miner/manage-miner.component';
import { ViewBotComponent } from './components/bots/view-bot/view-bot.component';


const routes : Routes = [{
    path:'',
    component:BotsComponent
  },{
    path:'createBot',
    component:ManageBotComponent
  },
  {
    path:'view-bot',
    component:ViewBotComponent
  },
  
  {
    path:'miner',
    component:MinerComponent
  },{
    path:'createMiner',
    component:ManageMinerComponent
  },{
    path:'miner/:identifier',
    component:ManageMinerComponent
  },
  
  
  {
    path:'parameter',
    component:ParameterComponent
  },{
    path:'parameter/:identifier',
    component:ManageParameterComponent  
  },{
    path:'createParameter',
    component:ManageParameterComponent  
  },
  {
    path:'dataSource',
    component:DataSourceComponent  
  },{
    path:'createDataSource',
    component:CreateDataSourceComponent  
  },{
    path:'dataSource/:identifier',
    component:CreateDataSourceComponent  
  },
  
  {
    path:'dataEntity',
    component:DataEntityComponent  
  },{
    path:'dataEntity/:identifier',
    component:CreateEntityComponent  
  },{
    path:'createDataEntity',
    component:CreateEntityComponent  
  },
  
  
  {
    path:'dataSet',
    component:DataSetComponent  
  },{
    path:'dataSet/:identifier',
    component:ManageDataSetComponent  
  },{
    path:'createDataSet',
    component:ManageDataSetComponent  
  },



  {
    path:'dataStage',
    component:DataStageComponent  
  },{
    path:'dataStage/:identifier',
    component:ManageDataStageComponent  
  },{
    path:'createDataStage',
    component:ManageDataStageComponent  
  },

  
  
  
  
  
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
