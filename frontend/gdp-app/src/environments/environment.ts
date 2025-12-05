export const environment = {
    apiUrl: typeof window !== 'undefined'
      ? (window as any)['API_URL']
      : 'http://localhost:3000',
};