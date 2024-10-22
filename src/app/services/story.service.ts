import { Injectable, signal } from '@angular/core';
import { Story } from '../models/story.model';

@Injectable({
  providedIn: 'root'
})
export class StoryService {
  private stories = signal<Story[]>([]);
  private selectedStories = signal<Story[]>([]);

  addStory(story: Story) {
    if (!this.stories().some(s => s.description === story.description)) {
      this.stories.update(stories => [...stories, { ...story, id: stories.length + 1 }]);
    }else{
      alert("same story description");
    }
  }

  clearStories() {
    this.stories.set([]);
    this.clearSelectedStories();
  }

  clearSelectedStories() {
    this.selectedStories.set([]);
  }

autoSelectStories(targetPoints: number) {
  let currentPoints = 0;
  const selected: Story[] = [];

  // Sort stories by points in descending order
  const sortedStories = this.stories().sort((a, b) => b.points - a.points);

  for (const story of sortedStories) {
    if (currentPoints + story.points <= targetPoints) {
      selected.push(story);
      currentPoints += story.points;
    }
  }

  if (selected.length > 0 && currentPoints > 0) {
    this.selectedStories.set(selected);
    return true;
  }

  return false;
}


  getStories() {
    return this.stories;
  }

  getSelectedStories() {
    return this.selectedStories;
  }
}
