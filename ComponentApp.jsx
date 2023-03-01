import { useState } from "react";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['first category']);
  const [category,setCategory]=useState('')

  const onAddCategory = () => {
    setCategories(list => [...list, category]);
  };

  const onSetCategory=(evt)=>{
    setCategory(evt.target.value)
  }
  return (
    <>
      <h1>GifExpert</h1>
      <input type="text" value={category}
      onChange={(event)=>onSetCategory(event)}/>
      <button onClick={()=>onAddCategory()}>Add Category</button>
      <ol>
        {
          categories.map(
            (category,key)=>
            {
              return <li ket={key}>{category}</li>
            }
          )
        }
      </ol>
    </>
  );
};