import { combineEpics } from "redux-observable";

import {loadOpenApiConfigurationEpic} from "./openApiConfigurationEpics";

const epics = combineEpics(
    loadOpenApiConfigurationEpic,
)

export default epics;
