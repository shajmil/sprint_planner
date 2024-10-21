import { Routes } from '@angular/router';
import { SprintDisplayComponent } from './views/sprint-display/sprint-display.component';
import { SprintPlannerComponent } from './views/sprint-planner/sprint-planner.component';
import { StoryFormComponent } from './views/story-form/story-form.component';
import { StoryListComponent } from './views/story-list/story-list.component';


export const routes: Routes = [
  { path: '', redirectTo: '/stories', pathMatch: 'full' },
  { path: 'stories', component: StoryListComponent },
  { path: 'add-story', component: StoryFormComponent },
  { path: 'plan-sprint', component: SprintPlannerComponent },
  { path: 'sprint', component: SprintDisplayComponent },
];
