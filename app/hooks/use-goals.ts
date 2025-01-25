import { useState, useCallback } from "react"
import type { Goal } from "@/types"

// Mock initial data
const initialGoals: Goal[] = [
  { id: "1", userId: "1", title: "Complete project", deadline: "2023-12-31", status: "In Progress" },
  { id: "2", userId: "1", title: "Learn React", deadline: "2023-11-30", status: "Completed" },
  { id: "3", userId: "2", title: "Exercise regularly", deadline: "2023-12-31", status: "In Progress" },
]

export const useGoals = () => {
  const [goals] = useState<Goal[]>(initialGoals)

  const getUserGoals = useCallback(
    (userId: string) => {
      return goals.filter((goal) => goal.userId === userId)
    },
    [goals],
  )

  const getGoalSummary = useCallback(() => {
    const totalGoals = goals.length
    const completedGoals = goals.filter((goal) => goal.status === "Completed").length
    const completionPercentage = (completedGoals / totalGoals) * 100

    return {
      totalGoals,
      completedGoals,
      completionPercentage: completionPercentage.toFixed(2),
    }
  }, [goals])

  return { goals, getUserGoals, getGoalSummary }
}

