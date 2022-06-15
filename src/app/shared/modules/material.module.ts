import { NgModule } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';

const materialModules = [
  MatSelectModule,
  MatButtonModule,
  MatToolbarModule,
  MatCardModule,
];

@NgModule({
  imports: [...materialModules],
  exports: [...materialModules],
})
export class MaterialModule {}
