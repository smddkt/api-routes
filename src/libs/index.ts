// export const getFetcher = (url: string) => fetch(url).then((res) => res.json());

export const getFetcher = (url: string) => fetch(url).then((res) => res.text());