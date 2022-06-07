// There are MANY other keys. Mapping only the ones I need.
export interface IShow {
  score: number;
  show: {
    averageRuntime: number
    genres: string[]
    id: number
    image?: { medium?: string, original: string } 
    language: string
    name: string
    runtime: number
    schedule: {time: string, days: string[]}
    summary: string
    url: string
    network: {
      name: string
    } | null
  };
}

export interface IShowDetails {
  averageRuntime: number
  genres: string[]
  id: number
  image?: { medium?: string, original: string } 
  language: string
  name: string
  runtime: number
  schedule: {time: string, days: string[]}
  summary: string
  url: string
}