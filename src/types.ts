export enum Tipes {
    user = 'user',
    repo = 'repo',
}

export type Tip = {
    type: Tipes;
    id: number;
}

export type FormType = {
    name: string;
    tip: Tipes;
}

export type DataType = {
    id: number;
    name: string;
    public_repos: number;
    type: Tipes;
}