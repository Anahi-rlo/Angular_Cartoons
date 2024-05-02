import { Routes } from '@angular/router';
import { HomePage } from './pages/home/home.page';
import { ContactPage } from './pages/contact/contact.page';
import { AboutPage } from './pages/about/about.page';
import { TvShowsPage } from './pages/tv-shows/tv-shows.page';
import { ErrorPage } from './pages/error/error.page';
//llenamos de rutas que vamos a utilizar
//path: url
//component: a cual comonente se referencia
export const routes: Routes = [
    //redireccionar: el full simboliza que haga mach con la ruta
    { path: "", redirectTo: "tvshows", pathMatch: "full" },
    { path: "home", component: HomePage },
    { path: "contact", component: ContactPage },
    { path: "about", component: AboutPage },
    { path: "tvshows", component: TvShowsPage },
    //definimos una ruta de mensaje de error
    { path: "error", component: ErrorPage },
    /* ** = cualquier ruta q no esta definida  aqui va arenderizar este componente
    en este caso la pantalla error*/
    //esta debe de encontrarse al final, para que si no encuentra ninguna de la lista, esta las elimine
    { path: "**", redirectTo: "error", pathMatch: "full" }
];
