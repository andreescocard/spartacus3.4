import { NgModule } from '@angular/core';
import { BaseStorefrontModule } from "@spartacus/storefront";
import { SpartacusConfigurationModule } from './spartacus-configuration.module';
import { SpartacusFeaturesModule } from './spartacus-features.module';
//import { LogoComponent } from '../outlets/logo.component';

@NgModule({
  declarations: [],
  imports: [
    SpartacusFeaturesModule,
    //LogoComponent,
    SpartacusConfigurationModule,
    BaseStorefrontModule
  ],
  exports: [BaseStorefrontModule]
})
export class SpartacusModule { }
