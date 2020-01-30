import { DependencyService } from "./dependency.service";

export const DependencyServiceProvider = {
  provide: DependencyService,
  // The same happens with useFactory
  // useFactory: () => {
  //   return new DependencyService();
  // },
  useClass: DependencyService
};
