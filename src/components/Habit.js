import React from "react";

/**
 * Habit component that displays a habit, allows the user to toggle
 * the habit's completed state, and delete the habit.
 *
 * TODO: implement the Habit component here
 */


const Habit = ({ habit, onToggleHabit, onDeleteHabit }) => { 
    return ( 
    <li> 
        <label style={{ textDecoration: habit.isComplete ? "line-through" : "none" }}> 
        <input 
            type="checkbox" 
            checked={habit.isComplete} 
            onChange={() => onToggleHabit(habit.id)} 
        /> 
        {habit.habits} 
        </label> 
        <button onClick={() => onDeleteHabit(habit.id)}>Delete</button> 
    </li> 
    ); 
}; 

export default Habit;
