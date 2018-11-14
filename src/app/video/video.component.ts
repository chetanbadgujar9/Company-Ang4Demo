import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    moduleId: module.id,
    selector: 'app-video',
    templateUrl: 'video.component.html',
    styleUrls: ['video.component.css']
})
export class VideoComponent implements OnInit {
    AddForm: FormGroup;
    addFlag: boolean = false;
    constructor(private _formBuilder: FormBuilder) {
        //
    }
    ngOnInit() {
        this.setAddForm();
    }
    setAddForm() {
        this.AddForm = this._formBuilder.group({
            FirstName: ['', [Validators.required]],
            LastName: ['', [Validators.required]],
            Country: ['India']
        });
    }
    onSelect(value) {
        console.log(value);
    }
    onSubmitForm({ value, valid }: { value: any, valid: boolean }) {
        if (valid) {
            this.addFlag = false;
            console.log(value);
        } else {
            this.addFlag = true;
        }
    }
}
