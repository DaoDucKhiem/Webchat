import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchConversationComponent } from './search-conversation.component';

describe('SearchConversationComponent', () => {
  let component: SearchConversationComponent;
  let fixture: ComponentFixture<SearchConversationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchConversationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchConversationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
