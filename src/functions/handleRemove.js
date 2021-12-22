import updateData from "../Hooks/updateData";

export const handleRemove = (providedArray, id, data, typeId, setData) => {

    const{state, setState} = providedArray;
    state.map((element, index) => {
        element.id = index + 1;
    });
    const filteredArray = state.filter(element => element.id !== id+1);
    setState(filteredArray);
    updateData(typeId, {...data, details: filteredArray});

    // TODO Solve with useReducer
    setData(currentData => {
        currentData[typeId] = {...data, details: filteredArray};
        return currentData;
    })
}