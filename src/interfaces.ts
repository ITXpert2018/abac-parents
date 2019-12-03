export interface User {
  uid?: string;
  email?: string;
  password?: string;
  fullName?: string;
  phone?: string;
  photoUrl?: string;
}

export interface OtherFamilyContact {
  fullName?: string;
  email?: string;
  phone?: string;
}

export interface Child {
  id?: string;
  parentId?: string;
  photoUrl?: string;
  fullName?: string;
  gender?: string;
  lactoseIntolerant?: boolean;
  glutenIntolerant?: boolean;
  aminesIntolerant?: boolean;
  otherFoodIntolerance?: string;
  schoolRegisteredIn?: School;
  schoolName?: string;
  schoolId?: string;
  schoolYear?: string;
  otherFamilyContact?: OtherFamilyContact
  allowedToMakePhotos?: boolean;
  allowedToSendNotification?: boolean;
  allowedKidGoHomeAlone?: boolean;
  activitiesEnrolled?: Activity[];
}

export interface Message {
  id?: string;
  text?: string;
  timestamp?: string;
  senderUid?: string;
}

export interface Category {
  id?: string;
  name?: string;
  image?: string;
  isMeal?: boolean;
  activities?: Activity[];
}

export interface Activity {
  id?: string;
  schoolId?: string;
  schoolName?: string;
  image?: string;
  name?: string;
  description?: string;
  price?: number;
  start_date?: Date;
  end_date?: Date;
  duration_hrs?: number;
  isMeal?: boolean;
  categoryId?: string;
}
export interface ActivityDetail {
  report: string;

}
export interface ChildActivity extends Activity {
  childNames?: string[];
}

export interface School {
  id?: string;
  address?: string;
  director?: string;
  name?: string;
}

export interface Card {
  id?: string;
  cardnumber?: number;
  cvv?: number;
  expirydate?: string;
}