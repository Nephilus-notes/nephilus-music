import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { SingleSongComponent } from './single-song.component';
import { BehaviorSubject } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ApiService } from 'src/app/services/api.service';
import { Song } from 'src/app/models/song';

describe('SingleSongComponent', () => {
  let component: SingleSongComponent;
  let fixture: ComponentFixture<SingleSongComponent>;
  let route: ActivatedRoute;
  let apiService: ApiService;
  let song: Song;


  beforeEach(async() => {
    TestBed.configureTestingModule({
      declarations: [SingleSongComponent],
      imports: [HttpClientTestingModule, RouterTestingModule.withRoutes([])],
      providers:  [ {
        provide: HttpClientTestingModule, useValue: apiService
      },
      {
        provide: ActivatedRoute, 
        useValue: {
          snapshot: {
            params: {id: 1}
          }
        }
      }]
    });
    song = {
      id: 1,
      title: 'test song',
      artist: 'test artist',
      album: 'test album',
      year: '2021',
      genre: 'test genre',
      duration: 189,
      lyrics: 'test lyrics',
      tab: 'test tab',
      created_at: new Date(),
      updated_at: new Date(),
      deleted_at: new Date(),
      deleted: false,
      known: true,
      times_requested:4
    }

    apiService = TestBed.inject(ApiService);
    fixture = TestBed.createComponent(SingleSongComponent);
    component = fixture.componentInstance;
    spyOn(apiService, 'getOneSong').and.returnValue(of(song));
    fixture.detectChanges();
  });

  // route = TestBed.inject(ActivatedRoute);

  it('should create', () => {
    
    expect(component).toBeTruthy();
  });

  it('should be zero', (done) => { // add done to let Jasmine know when you're done with the test
    pending();
  });

  // tests for the getSong function
  it('should call the getOneSong function', () => {
    component.getSong();
    expect(apiService.getOneSong).toHaveBeenCalled();
    expect(component.song).toEqual(song);
    expect(component.song.title).toEqual('test song');
  });

  // it('should not be zero', (done) => {
  //   // paramsSubject.next({ id1: 1, id2: 3});
  //   route.params.subscribe(params => {
  //     expect(params['id1']).not.toBe(0);
  //     done();
  //   });
  // });
  
});
