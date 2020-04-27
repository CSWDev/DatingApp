import {Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { MessagesComponent } from './messages/messages.component';
import { ListsComponent } from './lists/lists.component';
import { AuthGuard } from './_guards/auth.guard';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';

// first match wins system when routing
// altering path in url will result in approute to match up
// ordering here is important, if the wildcard was at the top of the
// list it would just take every request to the home page
export const appRoutes: Routes = [
    { path: '', component: HomeComponent},
    {
        // path is left intentionally empty as the child path which gets selected will be
        // populated in its stead.
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children: [
            { path: 'members', component: MemberListComponent},
            { path: 'members/:id', component: MemberDetailComponent},
            { path: 'messages', component: MessagesComponent},
            { path: 'lists', component: ListsComponent}
        ]
    },
    { path: '**', redirectTo: '', pathMatch: 'full'}
]