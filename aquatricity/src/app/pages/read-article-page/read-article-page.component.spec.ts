import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadArticlePageComponent } from './read-article-page.component';

describe('ReadArticlePageComponent', () => {
  let component: ReadArticlePageComponent;
  let fixture: ComponentFixture<ReadArticlePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadArticlePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadArticlePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
