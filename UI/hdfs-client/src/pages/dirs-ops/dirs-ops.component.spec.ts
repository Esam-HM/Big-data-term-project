<<<<<<< HEAD
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirsOpsComponent } from './dirs-ops.component';

describe('DirsOpsComponent', () => {
  let component: DirsOpsComponent;
  let fixture: ComponentFixture<DirsOpsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirsOpsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirsOpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
=======
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirsOpsComponent } from './dirs-ops.component';

describe('DirsOpsComponent', () => {
  let component: DirsOpsComponent;
  let fixture: ComponentFixture<DirsOpsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirsOpsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirsOpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
>>>>>>> 8dcf84e53af6baab79ddf31d0b2f03c4a4cdf05b
