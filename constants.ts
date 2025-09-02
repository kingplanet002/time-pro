import type { City } from './types';

export const CITIES: City[] = [
  // Americas
  { name: 'Buenos Aires', country: 'Argentina', timezone: 'America/Argentina/Buenos_Aires', imageKeyword: 'BuenosAires' },
  { name: 'Chicago', country: 'USA', timezone: 'America/Chicago', imageKeyword: 'Chicago' },
  { name: 'Lima', country: 'Peru', timezone: 'America/Lima', imageKeyword: 'Lima' },
  { name: 'Los Angeles', country: 'USA', timezone: 'America/Los_Angeles', imageKeyword: 'LosAngeles' },
  { name: 'Mexico City', country: 'Mexico', timezone: 'America/Mexico_City', imageKeyword: 'MexicoCity' },
  { name: 'New York', country: 'USA', timezone: 'America/New_York', imageKeyword: 'NewYork' },
  { name: 'Rio de Janeiro', country: 'Brazil', timezone: 'America/Sao_Paulo', imageKeyword: 'RioDeJaneiro' },
  { name: 'Toronto', country: 'Canada', timezone: 'America/Toronto', imageKeyword: 'Toronto' },
  { name: 'Vancouver', country: 'Canada', timezone: 'America/Vancouver', imageKeyword: 'Vancouver' },

  // Europe
  { name: 'Amsterdam', country: 'Netherlands', timezone: 'Europe/Amsterdam', imageKeyword: 'Amsterdam'},
  { name: 'Athens', country: 'Greece', timezone: 'Europe/Athens', imageKeyword: 'Athens' },
  { name: 'Berlin', country: 'Germany', timezone: 'Europe/Berlin', imageKeyword: 'Berlin' },
  { name: 'Istanbul', country: 'Turkey', timezone: 'Europe/Istanbul', imageKeyword: 'Istanbul' },
  { name: 'London', country: 'UK', timezone: 'Europe/London', imageKeyword: 'London' },
  { name: 'Madrid', country: 'Spain', timezone: 'Europe/Madrid', imageKeyword: 'Madrid' },
  { name: 'Moscow', country: 'Russia', timezone: 'Europe/Moscow', imageKeyword: 'Moscow' },
  { name: 'Paris', country: 'France', timezone: 'Europe/Paris', imageKeyword: 'Paris' },
  { name: 'Rome', country: 'Italy', timezone: 'Europe/Rome', imageKeyword: 'Rome' },

  // Asia
  { name: 'Amman', country: 'Jordan', timezone: 'Asia/Amman', imageKeyword: 'Amman' },
  { name: 'Bangkok', country: 'Thailand', timezone: 'Asia/Bangkok', imageKeyword: 'Bangkok' },
  { name: 'Beijing', country: 'China', timezone: 'Asia/Shanghai', imageKeyword: 'Beijing' },
  { name: 'Beirut', country: 'Lebanon', timezone: 'Asia/Beirut', imageKeyword: 'Beirut' },
  { name: 'Doha', country: 'Qatar', timezone: 'Asia/Qatar', imageKeyword: 'Doha' },
  { name: 'Dubai', country: 'UAE', timezone: 'Asia/Dubai', imageKeyword: 'Dubai' },
  { name: 'Hong Kong', country: 'China', timezone: 'Asia/Hong_Kong', imageKeyword: 'HongKong' },
  { name: 'Mumbai', country: 'India', timezone: 'Asia/Kolkata', imageKeyword: 'Mumbai' },
  { name: 'New Delhi', country: 'India', timezone: 'Asia/Kolkata', imageKeyword: 'NewDelhi' },
  { name: 'Riyadh', country: 'Saudi Arabia', timezone: 'Asia/Riyadh', imageKeyword: 'Riyadh' },
  { name: 'Seoul', country: 'South Korea', timezone: 'Asia/Seoul', imageKeyword: 'Seoul' },
  { name: 'Shanghai', country: 'China', timezone: 'Asia/Shanghai', imageKeyword: 'Shanghai' },
  { name: 'Singapore', country: 'Singapore', timezone: 'Asia/Singapore', imageKeyword: 'Singapore' },
  { name: 'Tokyo', country: 'Japan', timezone: 'Asia/Tokyo', imageKeyword: 'Tokyo' },

  // Africa
  { name: 'Algiers', country: 'Algeria', timezone: 'Africa/Algiers', imageKeyword: 'Algiers' },
  // FIX: Corrected a typo in the property name from `name:g:` to `name:`.
  { name: 'Cairo', country: 'Egypt', timezone: 'Africa/Cairo', imageKeyword: 'Cairo' },
  { name: 'Johannesburg', country: 'South Africa', timezone: 'Africa/Johannesburg', imageKeyword: 'Johannesburg' },
  { name: 'Lagos', country: 'Nigeria', timezone: 'Africa/Lagos', imageKeyword: 'Lagos' },
  { name: 'Rabat', country: 'Morocco', timezone: 'Africa/Casablanca', imageKeyword: 'Rabat' },
  { name: 'Tunis', country: 'Tunisia', timezone: 'Africa/Tunis', imageKeyword: 'Tunis' },
  
  // Oceania
  { name: 'Auckland', country: 'New Zealand', timezone: 'Pacific/Auckland', imageKeyword: 'Auckland' },
  { name: 'Perth', country: 'Australia', timezone: 'Australia/Perth', imageKeyword: 'Perth'},
  { name: 'Sydney', country: 'Australia', timezone: 'Australia/Sydney', imageKeyword: 'Sydney' },
];