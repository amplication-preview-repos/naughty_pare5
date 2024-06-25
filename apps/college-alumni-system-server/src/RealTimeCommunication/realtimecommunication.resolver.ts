import * as graphql from "@nestjs/graphql";
import { RealTimeCommunicationService } from "./realtimecommunication.service";

export class RealTimeCommunicationResolver {
  constructor(protected readonly service: RealTimeCommunicationService) {}
}
