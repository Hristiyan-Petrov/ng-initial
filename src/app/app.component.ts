import { Component, OnInit } from '@angular/core';
import { IUser } from './interfaces/user';
import { UserService } from './services/user.service';
import { interval, Observable, of, Subscription } from 'rxjs';
import { tap, take, map, catchError } from 'rxjs/operators';

// Promises VS Observables

// 1
const data = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('This is the data');
        // reject('Error / Reason ???');
    }, 3000)
});

data.then((dataResult) => {
    console.log(dataResult);
});

// 2
Promise.resolve('data')
    .then(data => data.concat(' from promise'))
    .then(data => console.log(data));

// Observable
const obs = interval(1000).pipe(
    take(2),
    map(i => i + 1),
    tap(i => console.log(i + ' :i; from observable interval'))
);

obs.subscribe(
    value => {
        console.log('observer 1 received value: ' + value);
    },
    err => {
        console.log(err);
    },
    () => {
        console.log('observable stream 1 completed!');
    }
);

obs.subscribe(value => {
    console.log('observer 2 received value: ' + value);
})

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    users$: IUser[] | undefined;
    // users$: Observable<IUser[]> | undefined;
    message = 'No users :)';

    constructor(public userService: UserService) { }

    ngOnInit() {
        this.loadUsers();
    };

    private userSubscription?: Subscription;

    ngOnDestoy() {
        this.userSubscription?.unsubscribe();
    }


    loadUsers(value?: string): void {
        // Assign the Observable directly. DO NOT .subscribe() here. The Async pipe handles the subscription automatically
        // this.users = this.userService.loadUsers(value);

        this.userSubscription = this.userService.loadUsers(value)
            .subscribe({
                next: data => {
                    this.users$ = data;
                },
                error: err => {
                    console.log('ERROR from loadUsers method, userSubsciption: ', err);
                },
                complete: () => {
                    console.log('Stream finished');
                }
            });
    };

    reloadButtonHandler(): void {
        // this.users = undefined;
        this.users$ = undefined;
        this.message = 'Wait 3 seconds for fetch :)';
        setTimeout(() => {
            this.loadUsers();
            this.message = 'No users :)'
        }, 3000);
    };

    searchButtonHandler(searchInput: HTMLInputElement): void {
        const { value } = searchInput;
        this.loadUsers(value);
    };

}
