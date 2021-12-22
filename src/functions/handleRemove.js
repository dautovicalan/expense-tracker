import { type } from "@testing-library/user-event/dist/type";
import updateData from "../Hooks/updateData";

export const handleRemove = (providedArray, id, data, typeId, setData) => {

    const{state, setState} = providedArray;
    state.map((element, index) => {
        element.id = index + 1;
    });
    const filteredArray = state.filter(element => element.id !== id+1);
    setState(filteredArray);
    updateData(typeId, {...data, details: filteredArray});
    setData(currentData => {
        currentData[typeId] = {...data, details: filteredArray};
        console.log(currentData);
        return currentData;
    })
}