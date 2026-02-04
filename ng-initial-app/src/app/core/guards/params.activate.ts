import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ParamsActivate implements CanActivate {
    constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot):  UrlTree | boolean{
        const { data: { paramsActivate, paramsActivateRedirectUrl } } = route;

        if (!ParamsActivate || !Array.isArray(paramsActivate) || ParamsActivate.length === 0) return true;
        const hasAllRouteParams = paramsActivate.reduce((acc, currParam) => {
            return !!route.params[currParam] && acc;
        }, true);

        if (hasAllRouteParams) return true;

        return this.router.parseUrl(paramsActivateRedirectUrl || '/');
    }

}