// Modelo de los datos que devuelve el servicio en la petición get
export class FixerResponse {
    public success: string;
    public timestamp: number;
    public base: string;
    public date: number;
    public rates: CurrencyResults;
}

export class CurrencyResults {
    public USD: number;
}
