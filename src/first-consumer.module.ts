import { Injectable, Module } from "@nestjs/common";
import { DependencyServiceModule } from "./dependency-service.module";
import { DependencyService } from "./dependency.service";
import { DependencyServiceProvider } from "./dependency-service.provider";

@Injectable()
class FirstConsumer {
  constructor(private readonly dependency: DependencyService) {}
}

@Module({
  // Works fine using the module to provide DependencyService
  // imports: [DependencyServiceModule],
  // providers: [FirstConsumer],

  // But don't work if directly importing the provider
  providers: [DependencyServiceProvider, FirstConsumer]
})
export class FirstConsumerModule {
  constructor(private readonly first: FirstConsumer) {}
}
