import './Square.css'

function Square({value, onClickedSquare}){
    return(
        <div className="square" onClick={onClickedSquare}>{value}</div>
    )
}
export {Square}