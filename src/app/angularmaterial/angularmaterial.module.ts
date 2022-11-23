import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDialogModule} from '@angular/material/dialog';

const MaterialComponents=[MatButtonModule,
                           MatToolbarModule,
                           MatListModule,
                           MatMenuModule,
                           MatIconModule,
                           MatTableModule,
                           MatFormFieldModule,
                           MatInputModule,
                           MatSelectModule,
                           MatDatepickerModule,
                           MatNativeDateModule,
                           MatGridListModule,
                           MatPaginatorModule,
                           MatSortModule,
                           MatRadioModule,
                           MatCheckboxModule,
                           MatDialogModule
                          ]

@NgModule({
  imports: [MaterialComponents ],
  exports:[MaterialComponents]
})
export class AngularmaterialModule { }
