import './toolbar.css'

export const Toolbar = ({ filters, selected, onSelectFilter }) => (
    <ul className = "toolbar-list">
        {filters.map((filter, index) => (
            <li
            key = {index}
            className = {`toolbar-items ${
                selected === filter ? "toolbar-item_selected" : ""
            }`}
            onClick = {() => onSelectFilter(filter)} 
            >
                <span className="toolbar-items_text">{filter}</span>
            </li>
        ))}  
    </ul>

)
