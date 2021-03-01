export class User {
    id: number;
    nameUser: string;
    nombre: string;
    email: string;
    numero: string;
    roles?: Role[];
}

export class Role {
    id: number;
    rol: string;
}