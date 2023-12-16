import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';

import { SingleSongComponent } from './single-song.component';
import { BehaviorSubject } from 'rxjs';

describe('SingleSongComponent', () => {
  let component: SingleSongComponent;
  let fixture: ComponentFixture<SingleSongComponent>;
  let route: ActivatedRoute;
  const paramsSubject = new BehaviorSubject({ id: 1, id2: 2, id3:0 });


  beforeEach(async() => {
    TestBed.configureTestingModule({
      declarations: [SingleSongComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            params: paramsSubject
          },
        },
      ]
    });
    fixture = TestBed.createComponent(SingleSongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  route = TestBed.inject(ActivatedRoute);

  it('should create', () => {
    
    expect(component).toBeTruthy();
  });

  it('should be zero', (done) => { // add done to let Jasmine know when you're done with the test
    route.params.subscribe(params => {
      expect(params['id3']).toBe(0);
      done();
    });
  });

  // it('should not be zero', (done) => {
  //   // paramsSubject.next({ id1: 1, id2: 3});
  //   route.params.subscribe(params => {
  //     expect(params['id1']).not.toBe(0);
  //     done();
  //   });
  // });
  
});
