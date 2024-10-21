import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StoryService } from '../../services/story.service';

@Component({
  selector: 'app-story-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './story-form.component.html',
  styleUrl: './story-form.component.scss'
})
export class StoryFormComponent {
  description = '';
  points = 0;

  constructor(private storyService: StoryService) {}

  onSubmit() {
    if (this.description && this.points > 0) {
      this.storyService.addStory({ id: 0, description: this.description, points: this.points });
      this.description = '';
      this.points = 0;
    }
  }
}
