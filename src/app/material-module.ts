import { NgModule } from '@angular/core';

import { MatListModule } from '@angular/material/list';
import {MatPaginatorModule} from '@angular/material/paginator';

@NgModule({
    exports: [
        MatListModule,
        MatPaginatorModule,
    ]
})

export class MaterialModule { }

