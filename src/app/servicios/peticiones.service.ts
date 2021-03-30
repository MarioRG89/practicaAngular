import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
@Injectable({ providedIn: 'root' })
export class PeticionesService {
    constructor(private http: HttpClient) { }

    getLigas() {
        return this.http.get<any>("https://api-football-v1.p.rapidapi.com/v2/leagues/type/league", {
            headers: new HttpHeaders({
                "x-rapidapi-key": "8c028958c1msh04482df207ee55cp1d2d53jsn395d3438a725",
                "x-rapidapi-host": "api-football-v1.p.rapidapi.com"
            })

        });
    }

    getEventos() {
        return this.http.get<any>("https://api-football-v1.p.rapidapi.com/v2/events/214226", {
            headers: new HttpHeaders({
                'x-rapidapi-key': '8c028958c1msh04482df207ee55cp1d2d53jsn395d3438a725',
                'x-rapidapi-host': 'api-football-v1.p.rapidapi.com'
            })
        })
    }
    getEquipos(ligaId){
        return this.http.get<any>('https://api-football-v1.p.rapidapi.com/v2/teams/league/' + ligaId, {
            headers: new HttpHeaders({
                'x-rapidapi-key': '8c028958c1msh04482df207ee55cp1d2d53jsn395d3438a725',
                'x-rapidapi-host': 'api-football-v1.p.rapidapi.com'
            })
        })
     }
     getJugadores(equipoId):Observable<any>{
        return this.http.get<any>('https://api-football-v1.p.rapidapi.com/v2/players/team/' + equipoId, {
            headers: new HttpHeaders({
                'x-rapidapi-key': '8c028958c1msh04482df207ee55cp1d2d53jsn395d3438a725',
                'x-rapidapi-host': 'api-football-v1.p.rapidapi.com'
            })
        })
     }
}