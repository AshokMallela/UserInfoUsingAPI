

import "./index.css"

const Button = (props) => {

    const { value, userCall } = props

    const onclickBut = () => {
        userCall(value)
    }

    return (
        <div>


            <div className="button-container">
                <button type="button" className="button" onClick={onclickBut}>{value}</button>
            </div>
        </div>



    )
}

export default Button