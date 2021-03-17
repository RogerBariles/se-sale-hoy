export interface UserLogin {
    token: string;
    nameUser: string;
    authorities: Authorities[],
    idUser: number
};

export interface Authorities {
    authority: string;
}