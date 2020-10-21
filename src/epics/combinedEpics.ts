import { combineEpics } from "redux-observable";

import { loadOpenApiConfigurationEpic, loadOpenApiConfigurationSuccessEpic } from "./openApiConfigurationEpics"
import { selectCurrentEntityEpic, getAllEntityEpic } from "./selectCurrentEntityEpics"

const epics = combineEpics(
    loadOpenApiConfigurationEpic,
    loadOpenApiConfigurationSuccessEpic,
    selectCurrentEntityEpic,
    getAllEntityEpic
)

export default epics;
