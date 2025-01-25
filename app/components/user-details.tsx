import type React from "react"
import type { User, Goal } from "@/types"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface UserDetailsProps {
  user: User
  goals: Goal[]
}

export const UserDetails: React.FC<UserDetailsProps> = ({ user, goals }) => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">{user.name} s Goals</h2>
      {goals.map((goal) => (
        <Card key={goal.id}>
          <CardHeader>
            <CardTitle>{goal.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Deadline: {goal.deadline}</p>
            <p>Status: {goal.status}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

