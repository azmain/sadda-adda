import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
    providedIn: "root"
})
export class AuthGuard implements CanActivate {

    constructor(
        private authService: AuthService,
        private router: Router
    ) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): boolean | UrlTree | Observable<boolean | UrlTree> |
        Promise<boolean | UrlTree> {

        // return this.authService.user$
        //     .pipe(
        //         map(user=>{
        //             if(user) return true;

        //             this.router.navigate(['/']);
        //             return false;
        //         })
        //     );

        return this.authService.authStatus
            .pipe(
                map(isLoggedIn => {
                    if (isLoggedIn) return true;

                    this.router.navigate(
                        ['/login'],
                        { queryParams: { returnUrl: state.url } }
                    );
                    return false;
                })
            );
    }

}