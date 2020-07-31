import { HttpPostClient } from '@/data/protocols/http/http-post-client'
import { AuthenticationParams } from '@/domain/usecases/authentication'
import { InvalidCredentialsError } from '@/main/errors/invalid-credentials-error'
import { HttpStatusCode } from '@/data/protocols/http/http-reponse'

export class RemoteAuthentication {
  constructor (
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient
  ) {}

  async auth (params: AuthenticationParams): Promise<void> {
    const httpResponse = await this.httpPostClient.post({
      url: this.url,
      body: params
    })
    switch (httpResponse.statuCode) {
      case HttpStatusCode.unathorized: throw new InvalidCredentialsError()
    }
  }
}
