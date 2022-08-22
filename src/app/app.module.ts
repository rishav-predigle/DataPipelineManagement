import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './shared/components/header/header.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatListModule } from '@angular/material/list';
import { BotsComponent } from './components/bots/bots.component';
import { MinerComponent } from './components/miner/miner.component';
import { MatCardModule } from '@angular/material/card';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { SearchComponent } from './components/search/search.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import { PopUpComponent } from './components/pop-up/pop-up.component';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { ParameterComponent } from './components/parameter/parameter.component';
import { DataStageComponent } from './components/data-stage/data-stage.component';
import { DataSourceComponent } from './components/data-source/data-source.component';
import { TopBarDataSourceComponent } from './components/top-bar-data-source/top-bar-data-source.component';
import { CreateDataSourceComponent } from './components/data-source/create-data-source/create-data-source.component';
import { DataEntityComponent } from './components/data-entity/data-entity.component';
import { TopBarEntityComponent } from './components/data-entity/top-bar-entity/top-bar-entity.component'
import { CreateEntityComponent } from './components/data-entity/create-entity/create-entity.component';
import { DataSetComponent } from './components/data-set/data-set.component';
import { ManageDataSetComponent } from './components/data-set/manage-data-set/manage-data-set.component';
import { TopBarDataSetComponent } from './components/data-set/top-bar-data-set/top-bar-data-set.component';
import { TopBarDataStageComponent } from './components/data-stage/top-bar-data-stage/top-bar-data-stage.component';
import { ManageDataStageComponent } from './components/data-stage/manage-data-stage/manage-data-stage.component';
import { ManageParameterComponent } from './components/parameter/manage-parameter/manage-parameter.component';
import { TopBarParameterComponent } from './components/parameter/top-bar-parameter/top-bar-parameter.component';
import { TopBarBotComponent } from './components/bots/top-bar-bot/top-bar-bot.component';
import { ManageBotComponent } from './components/bots/manage-bot/manage-bot.component';
import { ManageMinerComponent } from './components/miner/manage-miner/manage-miner.component';
import { TopBarMinerComponent } from './components/miner/top-bar-miner/top-bar-miner.component';
import { ViewBotComponent } from './components/bots/view-bot/view-bot.component';
import { ViewBotStepsComponent } from './components/bots/view-bot/view-bot-steps/view-bot-steps.component';
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    BotsComponent,
    MinerComponent,
    HeaderComponent,
    SidebarComponent,
    SearchComponent,
    PopUpComponent,
    ConfirmDialogComponent,
    ParameterComponent,
    DataStageComponent,
    DataSourceComponent,
    TopBarDataSourceComponent,
    CreateDataSourceComponent,
    DataEntityComponent,
    TopBarEntityComponent,
    CreateEntityComponent,
    DataSetComponent,
    ManageDataSetComponent,
    TopBarDataSetComponent,
    ManageDataStageComponent,
    TopBarDataStageComponent,
    ManageParameterComponent,
    TopBarParameterComponent,
    TopBarBotComponent,
    ManageBotComponent,
    ManageMinerComponent,
    TopBarMinerComponent,
    ViewBotComponent,
    ViewBotStepsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    RouterModule,
    MatSidenavModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatListModule,
    MatCardModule,
    NgbModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MaterialModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }