import { EntityService } from "../services/entityService";
import { useMemo } from "react";


//With the help of this piece of code, we handle different addresses of api

export const useEntityCrud = (entityName: any) => {

    const service = useMemo(() => new EntityService(entityName), [entityName])

    const readData = () => {
        return service.read()
    }

    const readDataById = (id: any) => {
        return service.readById(id)
    }

    const addData = (body: any) => {
        return service.add(body)
    }

    const updateDate = (id: any, body: any) => {
        return service.update(id, body)
    }

    const deleteData = (id: any) => {
        return service.delete(id)
    }


    return {
        readData,
        addData,
        readDataById,
        updateDate,
        deleteData,
    }
}
