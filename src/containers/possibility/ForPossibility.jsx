import { useState } from "react";

function ForPossibility({label,value,onChange,require,errorMessage,...inputs}) {
const [focused, setFocused] = useState(true)
  
    return (
        <div>
            <form>
                <label className="label">
                    {label}
                </label>
                <input type={'text'} onChange={onChange} value={value}  {...inputs} 
              />
            </form>
           
        </div>
    )
}

export default ForPossibility;