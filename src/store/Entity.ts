import { Provider } from "../selectors/Provider";

export interface Entity {
    name: string
    shortName: string
    providers: Provider[]
}

