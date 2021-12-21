import updateData from "../Hooks/updateData";

 export const handleSubmit = (
    e,
    expenseId,
    expenseName,
    expanseMoney,
    data
  ) => {
    e.preventDefault();
    const foundedElement = data.find(element => element.id == expenseId);
    updateData(expenseId, {...foundedElement, details:[...foundedElement.details, {name: expenseName, value: expanseMoney}]})
};