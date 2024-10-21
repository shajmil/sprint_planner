import { Component } from '@angular/core';
import { StoryService } from '../../services/story.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { ErrorDialogComponent } from '../../components/error-dialog/error-dialog.component';

@Component({
  selector: 'app-sprint-planner',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterOutlet, RouterLink, MatDialogModule, MatButtonModule],
  templateUrl: './sprint-planner.component.html',
  styleUrl: './sprint-planner.component.scss'
})
export class SprintPlannerComponent {
  targetPoints = 0;

  constructor(
    private storyService: StoryService,
    private router: Router,
    private dialog: MatDialog
  ) {}

  onSubmit() {
    if (this.targetPoints > 0) {
      const success = this.storyService.autoSelectStories(this.targetPoints);
      if (success) {
        this.targetPoints = 0;
        this.router.navigate(['/sprint']);
      } else {
        this.openErrorDialog();
      }
    }
  }

  openErrorDialog() {
    const dialogRef = this.dialog.open(ErrorDialogComponent, {
      width: '400px',
      maxWidth: '90vw',
      data: { message: 'There are no matching stories for this point value.' },
      panelClass: 'centered-dialog',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'list-stories') {
        this.router.navigate(['/stories']);
      }
    });
  }

  clearStories() {
    this.storyService.clearStories();
  }

  clearSelectedStories() {
    this.storyService.clearSelectedStories();
  }
}
