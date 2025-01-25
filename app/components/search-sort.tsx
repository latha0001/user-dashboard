import type React from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

interface SearchSortProps {
  onSearch: (query: string) => void
  onSort: () => void
}

export const SearchSort: React.FC<SearchSortProps> = ({ onSearch, onSort }) => {
  return (
    <div className="flex space-x-2 mb-4">
      <Input placeholder="Search users..." onChange={(e) => onSearch(e.target.value)} className="flex-grow" />
      <Button onClick={onSort}>Sort by Name</Button>
    </div>
  )
}

