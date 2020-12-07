import React from 'react'
import classes from './BuildControls.module.css'
import BuildControl from './BuildControl/BuildControl'

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'},
];

const BuildControls = props => (
    <div className={classes.BuildControls}>
        <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
        {controls.map((el, i) => (
            <BuildControl
                key={el.label + i}
                label={el.label}
                amt={props.amounts[el.type]}
                added={() => props.ingredientAdded(el.type)}
                removed={() => props.ingredientRemoved(el.type)}
            />
        ))}
        <button 
            className={classes.OrderButton} 
            disabled={props.price === 4}
            onClick={props.ordered}
        >ORDER NOW</button>
    </div>
);

export default BuildControls
