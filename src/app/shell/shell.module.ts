import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';

import { PAGES } from './pages';
import { COMPONENTS } from './components';
import { ROUTING } from './shell.routes';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        FormsModule,
        IonicModule,
        TranslateModule,
        ROUTING
    ],
    declarations: [PAGES, COMPONENTS],
    providers: [],
    entryComponents: []
})
export class ShellModule {
}
