import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class YoutubeProvider {
  private youtubeParams = {
    key: 'AIzaSyCtq-jyIkjFzZNv0j2P0XvU_7dTd3vaBe4',
    type: 'video',
    maxResults: '50',
    part: 'id,snippet',
    // fields: 'items/id,items/snippet/title,items/snippet/description,items/snippet/thumbnails/default,items/snippet/channelTitle',
    // q: query,
    order: 'viewCount',
    channelId: 'UChz-g669jwIJApRuguWrT1w',
  }

  constructor(public http: Http) {
    console.log('Hello YoutubeProvider Provider');
  }

  getVideo() {
    return this.http.get('https://www.googleapis.com/youtube/v3/search', { params: this.youtubeParams })
      .map(res => res.json())
      .map(res => res.items)
  }

}
