import { Injectable, Module } from '@nestjs/common'

import { DependencyServiceModule } from './dependency-service.module'
import { DependencyService } from './dependency.service'

@Injectable()
class FirstConsumer {
  constructor(private readonly dependency: DependencyService) {}
}

@Module({
  imports: [DependencyServiceModule],
  providers: [DependencyService, FirstConsumer]
})
export class FirstConsumerModule {
  constructor(private readonly first: FirstConsumer) {}
}
