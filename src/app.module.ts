import { Module } from '@nestjs/common';
import { FirstConsumerModule } from './first-consumer.module';
import { SecondConsumerModule } from './second-consumer.module';

@Module({
  imports: [FirstConsumerModule, SecondConsumerModule],
})
export class AppModule {
}
