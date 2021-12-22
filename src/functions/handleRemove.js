import updateData from "../Hooks/updateData";

export const handleRemove = (providedArray, id, data) => {

    const{state, setState} = providedArray;
    const filteredArray = state.filter(element => element.id !== id)
    setState(filteredArray);
    updateData(id, {...data, details: filteredArray});
}