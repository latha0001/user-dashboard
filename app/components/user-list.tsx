import type React from "react"
import type { User } from "@/types"
import { useGoals } from "../hooks/use-goals"
import { Card, CardContent } from "@/components/ui/card"

interface UserListProps {
  users: User[]
  onSelectUser: (user: User) => void
}

export const UserList: React.FC<UserListProps> = ({ users, onSelectUser }) => {
  const { getUserGoals } = useGoals()

  return (
    <div className="space-y-4">
      {users.map((user) => (
        <Card key={user.id} className="cursor-pointer hover:bg-gray-100" onClick={() => onSelectUser(user)}>
          <CardContent className="p-4">
            <h3 className="text-lg font-semibold">{user.name}</h3>
            <p className="text-sm text-gray-600">{user.email}</p>
            <p className="text-sm mt-2">Goals: {getUserGoals(user.id).length}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

