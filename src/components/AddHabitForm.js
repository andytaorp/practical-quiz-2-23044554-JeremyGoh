import React, { useState } from "react";

export default function AddHabitForm({ onAddHabit }) {
  const [habitName, setHabitName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!habitName) return;
      const newHabit = {
        id: Date.now(),
        habits: habitName,
        isComplete: false,
      };
      onAddHabit(newHabit); 
      setHabitName(""); 
    
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={habitName}
        onChange={(e) => setHabitName(e.target.value)}
        placeholder="New Habit"
      />
      <button type="submit">Add Habit</button>
    </form>
  );

}
