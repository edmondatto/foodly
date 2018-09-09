export type Request = {
    state: 'PENDING' | 'ACTIVE' | 'LAGGING' | 'SUCCEEDED' | 'FAILED';
    error: string;
};

export type State = {
    searchRequest: Request,
    recipes: [] | null,
    searchString: {} | null
}