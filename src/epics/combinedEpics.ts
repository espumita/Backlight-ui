import { combineEpics } from "redux-observable";

import { loadOpenApiConfigurationEpic } from "./openApiConfigurationEpics";
import { loadOpenApiConfigurationSuccessEpic } from "./openApiConfigurationEpics";

const epics = combineEpics(
    loadOpenApiConfigurationEpic,
    loadOpenApiConfigurationSuccessEpic
)

export default epics;
