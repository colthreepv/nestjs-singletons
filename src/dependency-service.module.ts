import { Module } from '@nestjs/common'

import { DependencyService } from './dependency.service'

@Module({
  providers: [DependencyService],
  exports: [DependencyService],
})
export class DependencyServiceModule {}
