import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent {
  ApontamentArray : any[] = [];
  isResultLoaded = false;
  isUpdateFormActive = false;

  nome: string ="";
  atividade: string ="";
  horas: number = 0;
  date: string = "";
  apontamentoId = "";

  constructor(private http: HttpClient ) 
  {
    this.getAllApontamento();
  }

  ngOnInit(): void {
  }

  getAllApontamento()
  { 
    this.http.get("http://localhost:8800/")
    .subscribe((resultData: any)=>
    {
        this.isResultLoaded = true;
        console.log(resultData.data);
        this.ApontamentArray = resultData.data;
    });
  }

  register()
  {
    let bodyData = {
      "nome" : this.nome,
      "atividade" : this.atividade,
      "horas" : this.horas,
      "date" : this.date
    };

    this.http.post("http://localhost:8800/",bodyData).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Registrado com sucesso")
        this.getAllApontamento();
    });
  }

  UpdateRecords()
  {
    let bodyData = 
    {
      "nome" : this.nome,
      "atividade" : this.atividade,
      "horas" : this.horas,
      "date" : this.date
    };
    
    this.http.put("http://localhost:8800/" + this.apontamentoId,bodyData).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Registro de Apontamentos atualizado")
        this.getAllApontamento();
      
    });
  }
 
  save()
  {
    if(this.apontamentoId == '')
    {
        this.register();
    }
      else
      {
       this.UpdateRecords();
      }       

  }

}

