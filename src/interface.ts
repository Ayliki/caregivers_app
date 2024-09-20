export interface FormValues {
    surname: string;
    name: string;
    patronymic: string;
    maidenName: string;
    birthDate: string;
    city: string;
    district: string;
    registrationAddress: string;
    actualAddress: string;
    ownPhone: string;
    relativePhone: string;
    maritalStatus: string;
    hasChildren: boolean;
    passportDetails: string;
    hasBankCard: boolean;
    experienceYears: string;
    schedule: string[];
    hasMedicalEducation: boolean;
    educationInstitution: string;
    specialty: string;
    possibleEmployment: string;
    nationality: string;
    hasPermanentRegistration: boolean;
    alcoholPreference: string;
    alcoholFrequency: string;
    creditDetails: { bank: string; amount: string }[];
    covidStatus: string;
    covidIllnessDate: string;
    criminalRecord: boolean;
    hasCar: boolean;
    smokes: boolean;
    drives: boolean;
    caredAgeGroup: string[];
    medicalConditionsExperience: string[];
    medicalProceduresExperience: string[];
    dutiesWillingToPerform: string[];
    additionalExperience: string;
    caregivingExperience: string;
    lastWorkPlaces: { company: string; position: string; duration: string }[]; // Last workplaces
    declaration: boolean;
    recommendationDetails: { name: string; phone: string; position: string }[]; // Recommendation details
  }