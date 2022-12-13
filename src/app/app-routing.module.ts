import { DeleteComponent } from './components/forms/delete/delete.component';
import { EditComponent } from './components/forms/edit/edit.component';
import { CreateComponent } from './components/forms/create/create.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/view/home/home.component';
import { UserComponent } from './components/view/user/user.component';

const routes: Routes = [
	{
		path: "",
		component: HomeComponent
	},
	{
		path: "users",
		component: UserComponent
	},
	{
		path: "addUser",
		component: CreateComponent
	},
	{
		path: "edit/:id",
		component: EditComponent
	},
	{
		path: "delete/:id",
		component: DeleteComponent
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
