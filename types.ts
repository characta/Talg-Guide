export interface ChartDataPoint {
  name: string;
  smokePoint: number; // in Celsius
  omega6: number; // Percentage roughly
  saturated: number; // Percentage
}

export enum AppSection {
  HOME = 'home',
  BENEFITS = 'benefits',
  COMPARISON = 'comparison',
  BUSINESS = 'business',
  CHAT = 'chat'
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}