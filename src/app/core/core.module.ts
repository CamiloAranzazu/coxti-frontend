import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { SubTitleComponent } from './components/sub-title/sub-title.component';
import { CardsComponent } from './components/cards/cards.component';

@NgModule({
  declarations: [HeaderComponent, ButtonComponent, SubTitleComponent, CardsComponent],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    ButtonComponent,
    SubTitleComponent,
    CardsComponent
  ],
})
export class CoreModule { }
