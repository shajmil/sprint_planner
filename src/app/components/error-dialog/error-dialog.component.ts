import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-info-dialog',
  template: `
    <div class="flex flex-col items-center p-6 max-w-md">
      <h2 class="text-2xl font-medium mb-4 text-center">Information</h2>
      <mat-dialog-content>
        <p class="text-base leading-relaxed text-center mb-6">{{ data.message }}</p>
      </mat-dialog-content>
      <mat-dialog-actions class="w-full justify-end space-x-2">
        <button mat-button [mat-dialog-close]="'list-stories'" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
          <mat-icon class="mr-2">list</mat-icon>
          Go to Stories List
        </button>
        <button mat-button mat-dialog-close class="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition-colors">
          <mat-icon class="mr-2">close</mat-icon>
          Close
        </button>
      </mat-dialog-actions>
    </div>
  `,
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, MatIconModule],
})
export class ErrorDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ErrorDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {message: string}
  ) {}
}
