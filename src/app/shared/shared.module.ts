import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { SmallTitleComponent } from './components/small-title/small-title.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LogoComponent } from './components/logo/logo.component';

@NgModule({
  declarations: [ProductItemComponent, SmallTitleComponent, SpinnerComponent, LogoComponent],
  imports: [CommonModule, FontAwesomeModule, RouterModule],
  exports: [ProductItemComponent, SmallTitleComponent, SpinnerComponent, LogoComponent, RouterModule],
})
export class SharedModule {}
