import { Component, Input, OnChanges} from '@angular/core';
import { ImageService } from '../image-detail/shared/image.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
  
})
export class GalleryComponent implements OnChanges{
  
  visiableImages :any[] =[];
  title = 'Recent photos';

  @Input() filterBy?: string = 'all'

  constructor(private imageService: ImageService) {
    this.visiableImages = this.imageService.getImages();
   }

  ngOnChanges() {
  this.visiableImages = this.imageService.getImages();
  }

}
