import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-apontamentocrud',
  templateUrl: './apontamento-crud.component.html',
  styleUrls: ['./apontamento-crud.component.scss']
})
export class ApontamentoCrudComponent {

  ApontamentArray : any[] = [];
  isResultLoaded = false;
  isUpdateFormActive = false;

  nome: string ="";
  atividade: string ="";
  horas: string ="";
  apontamentoId = "";

  constructor(private http: HttpClient ) 
  {
    this.getAllApontamento();
  }

  ngOnInit(): void {
  }

  getAllApontamento()
  { 
    this.http.get("http://localhost:9002/api/student/")
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
    };

    this.http.post("http://localhost:9002/api/Apontamento/add",bodyData).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Registrado com sucesso")
        this.getAllApontamento();
    });
  }

  setUpdate(data: any) 
  {
   this.nome = data.name;
   this.atividade = data.atividade;
   this.horas = data.atividade;
  

   this.apontamentoId = data.id;
 
  }

  UpdateRecords()
  {
    let bodyData = 
    {
      "nome" : this.nome,
      "atividade" : this.atividade,
      "horas" : this.horas
    };
    
    this.http.put("http://localhost:9002/api/apontamento/update"+ "/"+ this.apontamentoId,bodyData).subscribe((resultData: any)=>
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


  setDelete(data: any)
  {
    this.http.delete("http://localhost:9002/api/student/delete"+ "/"+ data.id).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Apontamento deletado")
        this.getAllApontamento();
    });
  }
}