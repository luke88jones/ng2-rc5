import { Component } from "@angular/core";

@Component({
    selector: "app",
    template: `
    <div style="border: 1px solid black">
        <h1>Root Component</h1>
        <div>
            <ul>
                <li>
                    <a href="" routerLink="home">Home</a>
                </li>
                <li>
                    <a href="" routerLink="lazy">Lazy</a>
                </li>
            </ul>
            <router-outlet></router-outlet>
        </div>
    </div>`
})
export class AppComponent {

}