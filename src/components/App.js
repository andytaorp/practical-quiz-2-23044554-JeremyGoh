import React, { useState } from "react";
import AddHabitForm from "./AddHabitForm";
import HabitList from "./HabitList";

function App() {
  const [habits, setHabits] = useState([]);

  const handleAddHabit = (newHabit) => {
    
    setHabits([...habits, newHabit]);
  };

  const handleToggleHabit = (id) => {
    
    setHabits(
      habits.map((habit) =>
        habit.id === id ? { ...habit, isComplete: !habit.isComplete } : habit
      )
    );
  };

  const handleDeleteHabit = (id) => {
    
    setHabits(habits.filter((habit) => habit.id !== id));
  };

  return (
    <div>
      <h1>Habit Tracker</h1>
      <AddHabitForm onAddHabit={handleAddHabit} />
      <HabitList
        habits={habits}
        onToggleHabit={handleToggleHabit}
        onDeleteHabit={handleDeleteHabit}
      />
    </div>
  );
}

export default App;
