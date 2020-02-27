import { Component, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-image-uploader',
    templateUrl: './image-uploader.component.html',
    styleUrls: ['./image-uploader.component.scss']
})
export class ImageUploaderComponent {
    selectedFile: File = null;
    image;
    @Output() event = new EventEmitter();


    constructor(private http: HttpClient) {}
  
    public onFileSelected(event) {
        this.selectedFile = <File>event.target.files[0];
        if (this.selectedFile) {
            return this.upload();
        }
    }

    upload() {
        const fd = new FormData();
        fd.append('image', this.selectedFile, this.selectedFile.name);

        // this.http.post('http://localhost:4200/profile', fd).subscribe((res: any) => {
        //     this.image = res.data;
        //     this.event.emit(this.image);
        // }, (err: any) => {
        //     console.log(err);
        // });
        this.event.emit(fd);
    }
}
