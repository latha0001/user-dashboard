import { useState, useCallback } from "react"
import type { User } from "@/types"

// Mock initial data
const initialUsers: User[] = [
  { id: "1", name: "Kadavath Latha", email: "lathakadavath26@gmail.com" },
  { id: "2", name: "Boda Manoj Kumar", email: "bodamanojkumar26@gmail.com" },
]

export const useUsers = () => {
  const [users, setUsers] = useState<User[]>(initialUsers)

  const addUser = useCallback((name: string, email: string) => {
    const newUser: User = {
      id: Date.now().toString(),
      name,
      email,
    }
    setUsers((prevUsers) => [...prevUsers, newUser])
  }, [])

  const searchUsers = useCallback(
    (query: string) => {
      return users.filter(
        (user) =>
          user.name.toLowerCase().includes(query.toLowerCase()) ||
          user.email.toLowerCase().includes(query.toLowerCase()),
      )
    },
    [users],
  )

  const sortUsers = useCallback((key: keyof User) => {
    setUsers((prevUsers) => [...prevUsers].sort((a, b) => a[key].localeCompare(b[key])))
  }, [])

  return { users, addUser, searchUsers, sortUsers }
}

