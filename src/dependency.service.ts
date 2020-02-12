import { Injectable } from '@nestjs/common'

@Injectable()
export class DependencyService {
  constructor() {
    console.log("Instance created");
  }
}
