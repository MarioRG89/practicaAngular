import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {
  eventos = []
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.obtenerEventos();
  }
  obtenerEventos() {
    const datos = { "api": { "results": 15, "events": [{ "elapsed": 34, "elapsed_plus": null, "team_id": 543, "teamName": "Real Betis", "player_id": 1573, "player": "A. Guardado", "assist_id": 143, "assist": "Ale\u00f1\u00e0", "type": "subst", "detail": "Ale\u00f1\u00e0", "comments": null }, { "elapsed": 48, "elapsed_plus": null, "team_id": 546, "teamName": "Getafe", "player_id": 2824, "player": "Nemanja Maksimovi\u0107", "assist_id": null, "assist": null, "type": "Card", "detail": "Yellow Card", "comments": null }, { "elapsed": 56, "elapsed_plus": null, "team_id": 543, "teamName": "Real Betis", "player_id": 1570, "player": "Sergio Canales", "assist_id": null, "assist": null, "type": "Card", "detail": "Yellow Card", "comments": null }, { "elapsed": 63, "elapsed_plus": null, "team_id": 543, "teamName": "Real Betis", "player_id": 1561, "player": "Marc Bartra", "assist_id": null, "assist": null, "type": "Card", "detail": "Yellow Card", "comments": null }, { "elapsed": 65, "elapsed_plus": null, "team_id": 546, "teamName": "Getafe", "player_id": 47265, "player": "Jorge Molina", "assist_id": 9934, "assist": "Deyverson", "type": "subst", "detail": "Deyverson", "comments": null }, { "elapsed": 72, "elapsed_plus": null, "team_id": 543, "teamName": "Real Betis", "player_id": 668, "player": "N. Fekir", "assist_id": 1586, "assist": "Tello", "type": "subst", "detail": "Tello", "comments": null }, { "elapsed": 73, "elapsed_plus": null, "team_id": 543, "teamName": "Real Betis", "player_id": 1558, "player": "Joel Robles", "assist_id": null, "assist": null, "type": "Card", "detail": "Yellow Card", "comments": null }, { "elapsed": 74, "elapsed_plus": null, "team_id": 546, "teamName": "Getafe", "player_id": 47565, "player": "Xabier Etxeita", "assist_id": null, "assist": null, "type": "Card", "detail": "Yellow Card", "comments": null }, { "elapsed": 75, "elapsed_plus": null, "team_id": 546, "teamName": "Getafe", "player_id": 2671, "player": "Mata", "assist_id": 47266, "assist": "\u00c1ngel", "type": "subst", "detail": "\u00c1ngel", "comments": null }, { "elapsed": 80, "elapsed_plus": null, "team_id": 543, "teamName": "Real Betis", "player_id": 1584, "player": "Loren Mor\u00f3n", "assist_id": 47348, "assist": "Borja Iglesias", "type": "subst", "detail": "Borja Iglesias", "comments": null }, { "elapsed": 85, "elapsed_plus": null, "team_id": 546, "teamName": "Getafe", "player_id": 47407, "player": "A. Nyom", "assist_id": 2774, "assist": "O. Etebo", "type": "subst", "detail": "O. Etebo", "comments": null }, { "elapsed": 88, "elapsed_plus": null, "team_id": 543, "teamName": "Real Betis", "player_id": 1567, "player": "A\u00efssa Mandi", "assist_id": null, "assist": null, "type": "Card", "detail": "Yellow Card", "comments": null }, { "elapsed": 89, "elapsed_plus": null, "team_id": 543, "teamName": "Real Betis", "player_id": 143, "player": "Carles Ale\u00f1\u00e1", "assist_id": null, "assist": null, "type": "Card", "detail": "Yellow Card", "comments": null }, { "elapsed": 89, "elapsed_plus": null, "team_id": 546, "teamName": "Getafe", "player_id": 47266, "player": "\u00c1ngel", "assist_id": null, "assist": null, "type": "Goal", "detail": "Penalty", "comments": null }, { "elapsed": 90, "elapsed_plus": null, "team_id": 543, "teamName": "Real Betis", "player_id": 1563, "player": "Zouhair Feddal", "assist_id": null, "assist": null, "type": "Card", "detail": "Red Card", "comments": null }] } }
    // this.http.get<any>("https://api-football-v1.p.rapidapi.com/v2/events/214226", {
    //   headers: new HttpHeaders({
    //     'x-rapidapi-key': '8c028958c1msh04482df207ee55cp1d2d53jsn395d3438a725',
    //     'x-rapidapi-host': 'api-football-v1.p.rapidapi.com'
    //   })
    // }).subscribe(data => {
    //   console.log(data);
    //   data.api.events.forEach(element => {
    //     this.eventos.push(element);
    //   });

    // })
    datos.api.events.forEach(element => {
      this.eventos.push(element);
      });

  }
}
