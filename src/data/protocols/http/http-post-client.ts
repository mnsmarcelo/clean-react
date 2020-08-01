import { HttpReponse } from '@/data/protocols/http/http-reponse'

export type HttpPostParams<T> = {
  url: string
  body?: T
}
export interface HttpPostClient<T, R> {
  post (params: HttpPostParams<T>): Promise<HttpReponse<R>>
}
