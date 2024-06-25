import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { RealTimeCommunicationService } from "./realtimecommunication.service";

@swagger.ApiTags("realTimeCommunications")
@common.Controller("realTimeCommunications")
export class RealTimeCommunicationController {
  constructor(protected readonly service: RealTimeCommunicationService) {}
}
