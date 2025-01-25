import type React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface GoalSummaryProps {
  totalGoals: number
  completedGoals: number
  completionPercentage: string
}

export const GoalSummary: React.FC<GoalSummaryProps> = ({ totalGoals, completedGoals, completionPercentage }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Goal Summary</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Total Goals: {totalGoals}</p>
        <p>Completed Goals: {completedGoals}</p>
        <p>Completion Percentage: {completionPercentage}%</p>
      </CardContent>
    </Card>
  )
}

