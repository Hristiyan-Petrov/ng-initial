export const environment = {
  production: true,
  apiUrlBuilder: (resource: string) => 'https://my-domain.com/api'.concat(resource),

};
