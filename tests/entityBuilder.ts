import { Entity } from '../src/store/Entity'

export function entityBuilder(){
    return new EntityBuilder()
}

export class EntityBuilder {
    initialEntity: Entity

    constructor(){
        this.initialEntity = {
            name: undefined,
            shortName: undefined,
            providers: []
        }
    }

    WithName(entityName: string) : EntityBuilder {
        this.initialEntity.name = entityName
        return this
    }

    WithShortName(entityShortName: string) : EntityBuilder {
        this.initialEntity.shortName = entityShortName
        return this
    }

    build() {
        return this.initialEntity
    }
}



