import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })

export class CommonSerivice {

    role: string;

    constructor() { }

    getRole(): string {
        return this.role;
    };

    setRole(role: string): void {
        this.role = role;
    }


}