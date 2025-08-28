export interface Casino {
  rank: number
  name: string
  logo: string
  rating: number
  bonus: string
  features: string[]
  isTopChoice?: boolean
  url: string
  votes: number // Added votes property for review counts
  type: string // Added type property for casino type
  dopbonus?: string // Added optional additional bonus
}

export const casinos: Casino[] = [
  {
    rank: 1,
    name: "Betclic",
    logo: "/betclic.svg",
    rating: 9.8,
    bonus: "100% Até 20€",
    features: ["Popular", "Apostas Desportivas", "Casino ao Vivo"],
    isTopChoice: true,
    url: "https://www.betclic.pt/",
    votes: 8750,
    type: "CASINO PREMIUM",
  },
  {
    rank: 2,
    name: "Casino Portugal",
    logo: "/brand-ccasino.svg",
    rating: 9.7,
    bonus: "Aposta Grátis de 2€ Atualmente",
    features: ["Casino Oficial", "Jogos Exclusivos", "Pagamentos Rápidos"],
    url: "https://www.casinoportugal.pt/",
    votes: 7320,
    type: "CASINO ELITE",
  },
  {
    rank: 3,
    name: "Lebull",
    logo: "/lebull.svg",
    rating: 9.4,
    bonus: "250% até 400€ + 50€ de Aposta Grátis",
    features: ["Bónus Generoso", "Variedade de Jogos", "Suporte Português"],
    url: "https://www.lebull.pt/",
    votes: 6890,
    type: "CASINO AVANÇADO",
  },
  {
    rank: 4,
    name: "Solverde",
    logo: "/solverde.svg",
    rating: 9.2,
    bonus: "300% até 30€ em Aposta Grátis",
    features: ["Licenciado SRIJ", "Casino Português", "Suporte 24/7"],
    url: "https://www.solverde.pt/",
    votes: 5640,
    type: "CASINO VERIFICADO",
  },
  {
    rank: 5,
    name: "Luckia",
    logo: "/luckia.svg",
    rating: 9.0,
    bonus: "Aposta Grátis de Atualmente",
    features: ["Melhor Avaliado", "Oferta Exclusiva", "App Móvel"],
    url: "https://www.luckia.pt/",
    votes: 4280,
    type: "CASINO PREMIUM",
  },
]

export type CasinoSite = Casino

export const casinoSites = casinos

// Get top casino (rank 1)
export const getTopCasino = (): Casino => {
  return casinos.find((casino) => casino.rank === 1) || casinos[0]
}
