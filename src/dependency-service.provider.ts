import { DependencyService } from "./dependency.service";

export const DependencyServiceProvider = {
  provide: DependencyService,
  // useFactory: () => {
  //   return new DependencyService();
  // },
  useClass: DependencyService
};
