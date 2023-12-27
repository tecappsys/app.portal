import { NgModule } from '@angular/core';
import { SharedComponent } from './shared.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Import PrimeNG modules
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@NgModule({
  declarations: [
    SharedComponent
  ],
  imports: [   
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    CardModule,
    ButtonModule,
    
  ],
  exports:[   
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,    
    CardModule,
    ButtonModule,
    
    SharedComponent
  ]
})
export class SharedModule { }
