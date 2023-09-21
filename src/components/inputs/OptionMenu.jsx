/* eslint-disable react/prop-types */
import Button from "./Button"

const OptionMenu = ({image, textButton}) => {
  return (
    <div className="container-menu-options-select">
        <img src={image}/>
        <Button childreen={textButton}/>
    </div>
  )
}

export default OptionMenu
