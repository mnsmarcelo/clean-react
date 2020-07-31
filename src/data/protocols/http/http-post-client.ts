import { HttpReponse } from '@/data/protocols/http/http-reponse'

export type HttpPostParams = {
  url: string
  body?: object
}
export interface HttpPostClient {
  post (params: HttpPostParams): Promise<HttpReponse>
}
