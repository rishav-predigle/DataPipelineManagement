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
import { ShowBotComponent } from './components/show-bot/show-bot.component';
import { CreateBotComponent } from './components/create-bot/create-bot.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { SearchComponent } from './components/search/search.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateMinerComponent } from './components/creat-miner/create-miner.component';
import {FormsModule} from '@angular/forms';
import { EditMinerComponent } from './components/edit-miner/edit-miner.component'
import { ReactiveFormsModule } from '@angular/forms';
import { ViewMinerComponent } from './components/view-miner/view-miner.component';
import {MatDialogModule} from '@angular/material/dialog';
import { PopUpComponent } from './components/pop-up/pop-up.component';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { ParameterComponent } from './components/parameter/parameter.component';
import { ViewParamComponent } from './components/view-param/view-param.component';
import { CreateParamComponent } from './components/create-param/create-param.component';
import { EditParamComponent } from './components/edit-param/edit-param.component';
import { DataStageComponent } from './components/data-stage/data-stage.component';
import { ViewStageComponent } from './components/view-stage/view-stage.component';
import { TopBarDataStageComponent } from './components/top-bar-data-stage/top-bar-data-stage.component';
import { EditStageComponent } from './components/edit-stage/edit-stage.component';
import { CreateDataStageComponent } from './components/create-data-stage/create-data-stage.component';
import { DataSourceComponent } from './components/data-source/data-source.component';
import { TopBarDataSourceComponent } from './components/top-bar-data-source/top-bar-data-source.component';
import { CreateDataSourceComponent } from './components/data-source/create-data-source/create-data-source.component'
@NgModule({
  declarations: [
    AppComponent,
    BotsComponent,
    MinerComponent,
    HeaderComponent,
    SidebarComponent,
    ShowBotComponent,
    CreateBotComponent,
    SearchComponent,
    CreateMinerComponent,
    EditMinerComponent,
    ViewMinerComponent,
    PopUpComponent,
    ConfirmDialogComponent,
    ParameterComponent,
    ViewParamComponent,
    CreateParamComponent,
    EditParamComponent,
    DataStageComponent,
    ViewStageComponent,
    TopBarDataStageComponent,
    EditStageComponent,
    CreateDataStageComponent,
    DataSourceComponent,
    TopBarDataSourceComponent,
    CreateDataSourceComponent
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
    MatDialogModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }