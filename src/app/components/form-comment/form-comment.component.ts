import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-form-comment',
  standalone: false,
  
  templateUrl: './form-comment.component.html',
  styleUrl: './form-comment.component.css'
})
export class FormCommentComponent {
  @Input() comment:any[] = []; 

  newComment: any = {
    comment: '',
    reviewerName: '',
    rating: null
  };

  constructor(private http: HttpClient, private toastr: ToastrService) {}
  
  addComment() {
    if (this.newComment.comment && this.newComment.reviewerName && this.newComment.rating) {
      const newReview = { ...this.newComment, date: new Date().toISOString() };
      
      // إضافة التعليق إلى المصفوفة
      this.comment.push(newReview);
      this.toastr.success('Comment added successfully!', 'Success');

      // إعادة تعيين الحقول
      this.newComment = {
        comment: '',
        reviewerName: '',
        rating: null
      };
      
      this.toastr.success('comment Added');

    }

  }
}
