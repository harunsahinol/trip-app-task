export interface Tour {
  id: number;
  title: string;
  description: string;
  price: {
    adultPrice: number;
    childPrice: number;
    infantPrice: number;
  };
  galleries: Array<{
    id: number;
    url: string;
  }>;
  tourCategory: {
    name: string;
  };
  foodAndDrinks: Array<{
    name: string;
    isActive: boolean;
  }>;
  activityLocation: {
    address: string;
  };
  transferDescription: string;
  transferType: string;
  routes: {
    id: number;
    startDate: string;
    endDate: string;
    operatingDays: string[];
    groupSize: number;
    startTime: string[];
  }[];
  vehicle: {
    id: number;
    name: string;
  }
}
