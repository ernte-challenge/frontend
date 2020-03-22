export interface FarmLocation {
  id: string;
  name: string;
  whatToDoSubline: string;
  usersRegistered: number;
  usersNeeded: number;
  distance: number;
  salary: number;
  imageUrl: string;
}

export interface UserJob {
  location: FarmLocation;
  id: string;
  startDate: Date,
  endDate: Date,
}