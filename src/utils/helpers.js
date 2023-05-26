import { toast } from "react-toastify";
// add to db
export const addToDb = (id) => {
  let itemList = getFromDb();
  if (itemList.some((item) => item.id === id)) {
    toast.warn("Already Added ");
  } else {
    const newItem = { id: id };
    itemList = [...itemList, newItem];
    toast.success("The recipe is your favorite");
  }
  localStorage.setItem("fevorite-list", JSON.stringify(itemList));
};

export const getFromDb = () => {
  const stroedItem = localStorage.getItem("fevorite-list");
  return stroedItem ? JSON.parse(stroedItem) : [];
};