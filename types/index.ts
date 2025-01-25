export interface User {
    id: string
    name: string
    email: string
  }
  
  export interface Goal {
    id: string
    userId: string
    title: string
    deadline: string
    status: "In Progress" | "Completed"
  }
  
  