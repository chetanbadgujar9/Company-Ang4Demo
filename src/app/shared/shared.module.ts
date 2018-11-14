import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RainbowDirective } from './directive/rainbow.directive';
import { DataTableModule, SharedModule as PrimeSharedModule } from 'primeng/primeng';

/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */

@NgModule({
    imports: [CommonModule, RouterModule],
    declarations: [SidebarComponent, NavbarComponent, RainbowDirective],
    exports: [SidebarComponent, NavbarComponent, RainbowDirective,
        CommonModule, FormsModule, ReactiveFormsModule, RouterModule, PrimeSharedModule, DataTableModule]
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: []
        };
    }
}
