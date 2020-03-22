export interface FarmLocation {
  id: string;
  name: string;
  whatToDoSubline: string;
  usersRegistered: number;
  usersNeeded: number;
  distance: number;
  payedPerHour: number;
  bannerImageSrc: string;
  bannerImageDescription: string;
  locationPhoneNumber: string;
  city: string,
  zipCode: string
  houseNumber: string,
  street: string
  mainAreasOfActivity: string[]
  searchedProfile: string[]
  whatYouGet: string[]
}

export interface UserJob {
  location: FarmLocation;
  id: string;
  startDate: Date,
  endDate: Date,
}