import updateData from "../Hooks/updateData";

 export const handleSubmit = (
    e,
    expenseId,
    expenseName,
    expanseMoney,
    data,
    setData
  ) => {
    e.preventDefault();
    const foundedElement = data.find(element => element.id == expenseId);
    const foundedElementIndex = data.map(element => element.id).indexOf(parseInt(expenseId));
    const obj = {...foundedElement, details:[...foundedElement.details, {name: expenseName, value: expanseMoney}]};
    var temparr = data;
    temparr[foundedElementIndex] = obj;
    // ! useMemo is changing only when dependecie array is changing. In this case if we only send temparr, 
    //! value is not changed from perspective, so to change it we spread it in array
    setData([...temparr]);
    updateData(expenseId, {...foundedElement, details:[...foundedElement.details, {name: expenseName, value: expanseMoney}]})
};