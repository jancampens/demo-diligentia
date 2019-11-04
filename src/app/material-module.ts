import { NgModule } from '@angular/core';

import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatPaginatorModule} from '@angular/material/paginator';

@NgModule({
    exports: [
        MatListModule,
        MatToolbarModule,
        MatPaginatorModule,
    ]
})

export class MaterialModule { }

