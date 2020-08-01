import { HttpPostClient, HttpPostParams } from '@/data/protocols/http/http-post-client'
import { HttpReponse, HttpStatusCode } from '@/data/protocols/http/http-reponse'

export class HttpPostClientSpy<T, R> implements HttpPostClient<T, R> {
  url?: string
  body?: T
  response: HttpReponse<R> = {
    statuCode: HttpStatusCode.noContent
  }

  async post (params: HttpPostParams<T>): Promise<HttpReponse<R>> {
    this.url = params.url
    this.body = params.body
    return Promise.resolve(this.response)
  }
}
