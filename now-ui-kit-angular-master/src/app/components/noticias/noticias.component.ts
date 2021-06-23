import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

let proxy='https://damp-beach-17296.herokuapp.com/'
let url='https://api.eluniverso.arcpublishing.com/feeds/rss/?website=el-universo&query=taxonomy.sections._id:%22/deportes/futbol%22&sort=first_publish_date:desc'
fetch(proxy+url)
.then(response => response.text())
.then(data => {
  const parser = new DOMParser();
  const xml = parser.parseFromString(data, "application/xml");
  console.log(xml);

  let items=xml.getElementsByTagName("item")

  for(let item of items as any){
    let title=item.getElementsByTagName("title")[0].childNodes[0].nodeValue
    let description=item.getElementsByTagName("description")[0].childNodes[0].nodeValue
    let link=item.getElementsByTagName("link")[0].childNodes[0].nodeValue
    let plantilla=`
      <div class="col">
          <div class="card h-100">
            <div class="card-body">
              <h5 class="card-title">${title}</h5>
              <p class="card-text">${description}.</p>
              <p class="card-text">
                <a href="${link}" target="_blank">${link}</a>
              </p>
            </div>
            <div class="card-footer">
              <small class="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>
        </div>
      `
    document.getElementById("rss-container").innerHTML+=plantilla
  }
})
.catch(console.error);
