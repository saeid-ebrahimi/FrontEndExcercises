import './App.css';
import CourseGoalList from './components/CourseGoalList';
import goalsImg from "./assets/goals.jpg";
import Header from "./components/Header";
import NewGoal from './components/NewGoal';
import { useState } from 'react';

import CourseGoal from './components/CourseGoal';
export type CourseGoal = {
  title: string;
  description: string;
  id: number;
}
function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  function handleAddGoal( newGoal:CourseGoal ) {
    setGoals((prevGoals: CourseGoal[]) => {
      return [...prevGoals, newGoal]
    })
  }

  function handleDeleteGoal(id: number): void {
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id))
  }

  return (
    
    <main>
        <Header image={{src:goalsImg, alt: "A list of goals!"}}>
          <h1>Your Course Goals</h1>
        </Header>
        <NewGoal onAddGoal={handleAddGoal} />
        <br />
        <CourseGoalList goals={goals} onRemoveGoal={handleDeleteGoal} /> 
     </main>
  )
}

export default App
