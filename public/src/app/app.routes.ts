import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditComponent } from './edit/edit.component';
import { ShowComponent } from './show/show.component';
import { NewComponent } from './new/new.component';
const APP_ROUTES: Routes = [
    {path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'new', component: NewComponent },
    { path: 'edit/:id', component: EditComponent},
    { path: 'show/:id', component: ShowComponent }

];
export const routing = RouterModule.forRoot(APP_ROUTES);