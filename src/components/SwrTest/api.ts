export function postsApi(take: number, skip: number) {
    const route = `https://dummyjson.com/products?limit=${take}&skip=${skip}`;
    return {
        route,
        endpoint: (r: string) => fetch(r).then((d) => d.json()),
    };
}
