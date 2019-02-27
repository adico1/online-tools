import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { JsonViewerComponent } from './modules/json-viewer/pages/json-viewer/json-viewer.component';
import { YamlViewerComponent } from './modules/json-viewer/pages/yaml-viewer/yaml-viewer.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatTreeModule} from '@angular/material/tree';
import {MatIconModule} from '@angular/material';
import { MainHeaderComponent } from './shared/main-header/main-header.component';
import { LeftActionbarComponent } from './modules/left-actionbar/left-actionbar.component';
import { EnumToArrayPipe } from './core/pipes/enum-to-array.pipe';
import { ControlMenuComponent } from './modules/json-viewer/components/control-menu/control-menu/control-menu.component';
import { EditorInputportComponent } from './modules/json-viewer/components/editor/editor-inputport/editor-inputport.component';
import { EditorViewportComponent } from './modules/json-viewer/components/editor/editor-viewport/editor-viewport.component';
// tslint:disable-next-line:max-line-length
import { ControlMenuActionsComponent } from './modules/json-viewer/components/control-menu/control-menu-actions/control-menu-actions.component';
// tslint:disable-next-line:max-line-length
import { ControlMenuFlavorsComponent } from './modules/json-viewer/components/control-menu/control-menu-flavors/control-menu-flavors.component';
import { ControlMenuToolsComponent } from './modules/json-viewer/components/control-menu/control-menu-tools/control-menu-tools.component';

const appRoutes: Routes = [
  {path: '', component: JsonViewerComponent },
  {path: 'json-viewer', component: JsonViewerComponent },
  {path: 'yaml-viewer', component: YamlViewerComponent },
  {path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    JsonViewerComponent,
    YamlViewerComponent,
    PageNotFoundComponent,
    MainHeaderComponent,
    LeftActionbarComponent,
    EnumToArrayPipe,
    ControlMenuComponent,
    ControlMenuActionsComponent,
    ControlMenuFlavorsComponent,
    ControlMenuToolsComponent,
    EditorInputportComponent,
    EditorViewportComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true} // <- for debugging purpose only
    ),
    FormsModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTreeModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
