export interface UserData {
  firstlastName: string
  age: string
  jobTitle: string
  id: string;
}

export interface UsersSliceState {
  users: UserData[]
}
