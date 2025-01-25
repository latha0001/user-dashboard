"use client"

import React, { useState } from "react"
import { UserList } from "./components/user-list"
import { UserForm } from "./components/user-form"
import { UserDetails } from "./components/user-details"
import { GoalSummary } from "./components/goal-summary"
import { SearchSort } from "./components/search-sort"
import { useUsers } from "./hooks/use-users"
import { useGoals } from "./hooks/use-goals"
import type { User } from "@/types"

export default function Home() {
  const { users, addUser, searchUsers, sortUsers } = useUsers()
  const { getUserGoals, getGoalSummary } = useGoals()
  const [selectedUser, setSelectedUser] = useState<User | null>(null)
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearch = (query: string) => {
    setSearchQuery(query)
  }

  const handleSort = () => {
    sortUsers("name")
  }

  const filteredUsers = searchQuery ? searchUsers(searchQuery) : users

  const { totalGoals, completedGoals, completionPercentage } = getGoalSummary()

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">User Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <SearchSort onSearch={handleSearch} onSort={handleSort} />
          <UserList users={filteredUsers} onSelectUser={setSelectedUser} />
        </div>
        <div>
          <GoalSummary
            totalGoals={totalGoals}
            completedGoals={completedGoals}
            completionPercentage={completionPercentage}
          />
          <div className="mt-6">
            <h2 className="text-2xl font-bold mb-4">Add New User</h2>
            <UserForm onAddUser={addUser} />
          </div>
          {selectedUser && (
            <div className="mt-6">
              <UserDetails user={selectedUser} goals={getUserGoals(selectedUser.id)} />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

