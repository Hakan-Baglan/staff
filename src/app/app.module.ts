import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  NbThemeModule, NbLayoutModule, NbCardModule,
  NbButtonModule, NbTabsetModule, NbListModule, NbDialogModule,
  NbInputModule, NbAlertModule, NbToggleModule, NbToastrModule, NbGlobalPhysicalPosition, NbIconModule, NbFormFieldModule, NbStepperModule, NbButtonGroupModule, NbCheckboxModule, NbRadioModule, NbAccordionModule, NbSelectModule
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { InputComponent } from './componnent/input/input.component';
import { ButtonComponent } from './componnent/button/button.component';
import { StaffComponent } from './componnent/staff/staff.component';
import { NotFoundComponent } from './componnent/not-found/not-found.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableComponent } from './componnent/table/table.component';
import { AddStaffModalComponent } from './componnent/add-staff-modal/add-staff-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AppHoverDirective } from './directive/app-hover.directive';


export const createTranslateLoader = (http: HttpClient) => new TranslateHttpLoader(http, 'assets/i18n/', `.json`);

const NEBULAR_MODULES = [
  NbThemeModule.forRoot({ name: 'default' }),
  NbLayoutModule,
  NbEvaIconsModule,
  NbCardModule,
  NbButtonModule,
  NbTabsetModule,
  NbListModule,
  NbDialogModule.forRoot(),
  NbInputModule,
  NbAlertModule,
  NbToggleModule,
  NbIconModule,
  NbFormFieldModule,
  NbButtonGroupModule,
  NbCheckboxModule,
  NbRadioModule,
  NbSelectModule,
  NbAccordionModule,
  NbToastrModule.forRoot({
    duration: 2000,
    position: NbGlobalPhysicalPosition.BOTTOM_LEFT,
    hasIcon: false
  })
]


@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    ButtonComponent,
    StaffComponent,
    NotFoundComponent,
    TableComponent,
    AddStaffModalComponent,
    AppHoverDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    TranslateModule.forRoot({
      defaultLanguage: localStorage.getItem('userLang') || 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      },
    }),
    ...NEBULAR_MODULES,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }