import { NgModule } from '@angular/core';
import { translationChunksConfig, translations } from "@spartacus/assets";
import { FeaturesConfig, I18nConfig, OccConfig, provideConfig, SiteContextConfig } from "@spartacus/core";
import { defaultCmsContentProviders, layoutConfig, mediaConfig } from "@spartacus/storefront";

@NgModule({
  declarations: [],
  imports: [
  ],
  providers: [provideConfig(layoutConfig), provideConfig(mediaConfig), ...defaultCmsContentProviders, provideConfig(<OccConfig>{
   //change slots
    layoutSlots: {
        header: {
          lg: {
            slots: [
              'SiteLogo',
              'SiteContext',
              'SiteLogin',
              'MiniCart',
              'SearchBox',
              'NavigationBar'
          
            ],
          },

        }
      },
    backend: {
      occ: {
        baseUrl: 'https://spartacus-training.eastus.cloudapp.azure.com:8443', prefix: '/occ/v2'
      }
    },
  }), provideConfig(<SiteContextConfig>{
    context: {
      currency: ['USD'],
      language: ['en'],
      baseSite: ['electronics-spa'],
    },
  }), provideConfig(<I18nConfig>{
    i18n: {
      resources: translations,
      chunks: translationChunksConfig,
      fallbackLang: 'en'
    },
  }), provideConfig(<FeaturesConfig>{
    features: {
      level: '3.4'
    },
    //enable guest checkout training
    checkout: {
      guest: true
    }
  })]
})
export class SpartacusConfigurationModule { }
