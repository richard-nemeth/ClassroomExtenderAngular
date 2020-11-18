import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {MatTabsModule} from '@angular/material/tabs';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {CoursesService} from 'src/app/services/courses.service';
import {CoursesServiceStub} from 'src/app/test/testServices/courses.service.stub';

import {ContentComponent} from '../content/content.component';
import {CoursesComponent} from './courses/courses.component';

describe('ContentComponent', () => {
  let component: ContentComponent;
  let fixture: ComponentFixture<ContentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
        declarations: [
          ContentComponent,
          CoursesComponent
        ],
        providers: [
          {
            provide: CoursesService,
            useClass: CoursesServiceStub
          }
        ],
        imports: [
          MatTabsModule,
          BrowserAnimationsModule
        ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentComponent);
    component = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});