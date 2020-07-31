export enum HttpStatusCode {
  noContent = 204,
  unathorized = 401
}

export type HttpReponse = {
  statuCode: HttpStatusCode
  body?: any
}
