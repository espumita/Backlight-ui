import { OpenAPIObject, PathItemObject} from 'openapi3-ts'

export function openApiConfigurationBuilder(){
    return new OpenApiConfigurationBuilder()
}

export class OpenApiConfigurationBuilder {
    initialConfiguration: OpenAPIObject

    constructor(){
        this.initialConfiguration = {
            openapi: '3.0.0',
            info: {
                title: "Backlight",
                version: "1.0.0" 
            },
            paths: {}
        }
    }

    WithPath(pathName: string, pathItem: PathItemObject = {}) : OpenApiConfigurationBuilder {
        this.initialConfiguration.paths[pathName] = pathItem
        return this
    }

    build() {
        return this.initialConfiguration
    }
}
