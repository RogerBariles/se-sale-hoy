export interface UserLogin {
    token: string;
    nameUser: string;
    authorities: Authorities[]
};

export interface Authorities {
    authority: string;
}