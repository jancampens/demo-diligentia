import { NgModule } from '@angular/core';

import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
    exports: [
        MatListModule,
        MatToolbarModule,
    ]
})

export class MaterialModule { }

