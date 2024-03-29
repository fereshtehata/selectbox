import http from './http';
import ITutorialData from "./ITutorialData";

export class EntityService {

    entityName: any

    constructor(entityName: any) {
        this.entityName = entityName;
    }

    read = () => {
        return http.get<Array<ITutorialData>>(`/${this.entityName}`)
    }
    readById = (id: any) => {
        return http.get<ITutorialData>(`/${this.entityName}/${id}`)
    }
    add = (body: ITutorialData) => {
        return http.post<ITutorialData>(`/${this.entityName}`, body)
    }
    update = (id: any, body: ITutorialData) => {
        return http.put<any>(`/${this.entityName}/${id}`, body)
    }
    delete = (id: any) => {
        return http.delete<Array<ITutorialData>>(`/${this.entityName}/${id}`)
    }

}
