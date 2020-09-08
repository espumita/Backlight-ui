import type { OpenAPIObject } from "openapi3-ts";
import { Status } from "./Status";

export interface Store {
    openApi: OpenApiStore
}

export interface OpenApiStore {
    configuration: OpenAPIObject,
    status: Status
}
