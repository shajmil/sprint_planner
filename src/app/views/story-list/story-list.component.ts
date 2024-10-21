import { Component } from '@angular/core';
import { StoryService } from '../../services/story.service';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-story-list',
  standalone: true,
  imports: [ RouterOutlet, RouterLink],
  templateUrl: './story-list.component.html',
  styleUrl: './story-list.component.scss'
})
export class StoryListComponent {
  stories = this.storyService.getStories();

  constructor(private storyService: StoryService) {}
}
