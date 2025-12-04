export interface GDPEntry {
    country: string;
    time: string;
    gdp: number;
    source: 'EUROSTAT'| 'AMECO';
}