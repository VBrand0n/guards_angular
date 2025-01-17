import {Injectable} from '@angular/core';
import {Post} from "../interfaces/post";
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class PostService {

    posts: Post[] = []

    constructor(private http:HttpClient) {
     }

    getAllPosts() {
        return this.http.get<Post[]>('https://iub.danydev.co/api/posts')
    }

    getPostById(id: string) {
        return this.http.get<Post>(`https://iub.danydev.co/api/post/ver/${id}`)
    }

    addPost(post: Post): void {
        this.posts.push(post);
    }

    updatePost(post: Post): void {
        const index = this.posts.findIndex(p => p.id === post.id);
        if (index !== -1) {
            this.posts[index] = post;
        }
    }

    deletePost(id: string): void {
        this.posts = this.posts.filter(post => post.id !== id);
    }


}
