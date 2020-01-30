import { Module } from "@nestjs/common";
import { DependencyServiceProvider } from "./dependency-service.provider";

@Module({
  providers: [DependencyServiceProvider],
  exports: [DependencyServiceProvider],
})
export class DependencyServiceModule {
}
