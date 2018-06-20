import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

import { PostsService } from '../posts.service';
import { Post } from '../post.model';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})

export class PostCreateComponent implements OnInit {
  enteredTitle = '';
  enteredContent = '';
  post: Post;
  private mode = 'create';
  private postId: string;

  constructor(public postsService: PostsService, public route: ActivatedRoute, private spinnerService: Ng4LoadingSpinnerService) {}

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('postId')) {
        this.mode = 'edit';
        this.postId = paramMap.get('postId');
        this.spinnerService.show();
        this.postsService.getPost(this.postId).subscribe(postData => {
          this.spinnerService.hide();
          this.post = {id: postData._id, title: postData.title, content: postData.content};
        });
      } else {
        this.mode = 'create';
        this.postId = null;
      }
    });
  }

  onSavePost(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.spinnerService.show();
    if (this.mode === 'create') {
      this.postsService.addPost(form.value.title, form.value.content);
      this.spinnerService.hide();
    } else {
      this.spinnerService.hide();
      this.postsService.updatePost(
        this.postId,
        form.value.title,
        form.value.content
      );
    }
    form.resetForm();
  }
}
