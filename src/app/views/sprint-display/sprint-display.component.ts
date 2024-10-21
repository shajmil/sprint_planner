import { Component, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoryService } from '../../services/story.service';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-sprint-display',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink,],
  templateUrl: './sprint-display.component.html',
  styleUrl: './sprint-display.component.scss'
})
export class SprintDisplayComponent {
  selectedStories = this.storyService.getSelectedStories();
  totalPoints = computed(() => this.selectedStories().reduce((sum, story) => sum + story.points, 0));

  constructor(private storyService: StoryService) {}
}
