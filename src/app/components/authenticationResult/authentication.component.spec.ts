import {ComponentFixture, getTestBed, TestBed, waitForAsync} from '@angular/core/testing';
import {MatCardModule} from '@angular/material/card';
import {ActivatedRoute} from '@angular/router';
import {of} from 'rxjs';

import {AuthenticationResultComponent} from "./authentication.result.component";

import {AuthenticationService} from 'src/app/services/authentication.service';
import {AuthenticationServiceStub} from 'src/app/test/testServices/authentication.service.stub';


describe('AuthenticationResultComponent', () => {
  let component: AuthenticationResultComponent;
  let fixture: ComponentFixture<AuthenticationResultComponent>;
  let authenticationService: AuthenticationService;
  let route: ActivatedRoute;
  let injector: TestBed;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
        declarations: [AuthenticationResultComponent],
        providers: [
          {
            provide: AuthenticationService,
            useClass: AuthenticationServiceStub
          },
          {
            provide: ActivatedRoute,
            useValue: {
              queryParams: of({scope: 'result should be nine words of scopes being returned'})
            }
          }
        ],
        imports: [
          MatCardModule
        ]
    }).compileComponents();
}));

  beforeEach(() => {
    injector = getTestBed();
    fixture = TestBed.createComponent(AuthenticationResultComponent);
    component = fixture.debugElement.componentInstance;
    authenticationService = injector.inject(AuthenticationService);
    route = injector.inject(ActivatedRoute);
    fixture.detectChanges();
  });

 it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should start registration on doAuthentication', () => {
    const spy = spyOn(authenticationService, "startAuthentication");

    component.retry();

    expect(spy).toHaveBeenCalled();
  });


  it('should call validateScopes on onInit if no error', () => {
    const spy = spyOn<any>(component, 'validateScopes');

    component.ngOnInit();

    expect(spy).toHaveBeenCalled();
  });

  it('should call authenticationService persistAuthentication on onInit if result valid', () => {
    const spy = spyOn<any>(authenticationService, 'persistAuthentication');

    component.ngOnInit();

    expect(spy).toHaveBeenCalled();
 });
});