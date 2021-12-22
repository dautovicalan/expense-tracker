import updateData from "../Hooks/updateData";

export const handleRemove = (providedArray, id, data) => {

    const{state, setState} = providedArray;
    state.map((element, index) => {
        element.id = index + 1;
    })
    const filteredArray = state.filter(element => element.id !== id+1);
    console.log(filteredArray);
    setState(filteredArray);
    updateData(id+1, {...data, details: filteredArray});
}