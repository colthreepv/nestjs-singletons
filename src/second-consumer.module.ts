import { Injectable, Module } from "@nestjs/common";
import { DependencyServiceModule } from "./dependency-service.module";
import { DependencyService } from "./dependency.service";
import { DependencyServiceProvider } from "./dependency-service.provider";

@Injectable()
class SecondConsumer {
  constructor(private readonly dependency: DependencyService) {}
}

@Module({
  // Works fine using the module to provide DependencyService
  // imports: [DependencyServiceModule],
  // providers: [SecondConsumer],

  // But don't work if directly importing the provider
  providers: [DependencyServiceProvider, SecondConsumer]
})
export class SecondConsumerModule {
  constructor(private readonly second: SecondConsumer) {}
}
