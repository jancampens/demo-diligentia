import { NgModule } from '@angular/core';

import { MatPaginatorModule } from '@angular/material/paginator';
import { MatListModule } from '@angular/material/list';

@NgModule({
    exports: [
        MatPaginatorModule,
        MatListModule,
    ]
})

export class MaterialModule { }

