
import { User, CircleCheck } from "lucide-react"
import PropTypes from "prop-types";
import DropdownMenu from "./DropdownMenu";


export default function DropDown({
  label="Label", 
  placeholder="Input text", 
  options=[
    "Placeholder",
    "Placeholder",
    "Placeholder",
    "Placeholder",
    "Placeholder"
  ], 
  onChange = (option) => console.log("Selected:", option), 
  showIcons = true, 
  customCheckIcon = CircleCheck, 
  customUserIcon = User }){

    

    return(
        <div>
            <DropdownMenu 
            label={label}
            placeholder={placeholder}
            options={options} 
            onChange={onChange}
            showIcons={showIcons}
            customUserIcon={customUserIcon}
            customCheckIcon={customCheckIcon}
            />
            
          

        </div>
    )
}

DropDown.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  options: PropTypes.array,
  onChange: PropTypes.func,
  showIcons: PropTypes.bool,
  customUserIcon: PropTypes.elementType,
  customCheckIcon: PropTypes.elementType
};

