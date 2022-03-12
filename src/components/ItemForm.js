import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {
  
  const newItem = {
    id: uuid(),
    name: "", 
    category: "",
    
    }
  
    const [formData,setFormData] = useState({
    itemCategory: "Produce",
    itemName: ""
  })
  

function handleAddItem(event, newItem) {
event.preventDefault();

  
setFormData(formData => {
  return {...formData,
  [event.target.name]: event.target.value,
  }
})

  }

  
  return (
    <form className="NewItem">
      <label>
        Name:
        <input type="text"   name="name"  value={formData.itemName} onChange={handleAddItem} />
      </label>

      <label>
        Category:
        <select name="Category">
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit" onSubmit={onItemFormSubmit}>Add to List</button>
    </form>
  );
}

export default ItemForm;
