import { Injectable, Module } from '@nestjs/common'

import { DependencyServiceModule } from './dependency-service.module'
import { DependencyService } from './dependency.service'

@Injectable()
class SecondConsumer {
  constructor(private readonly dependency: DependencyService) {}
}

@Module({
  imports: [DependencyServiceModule],
  providers: [DependencyService, SecondConsumer]
})
export class SecondConsumerModule {
  constructor(private readonly second: SecondConsumer) {}
}
