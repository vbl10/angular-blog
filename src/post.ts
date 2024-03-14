export class post_stats {
    public views: number = 0;
    public shares: number = 0;
    public read_time: string = "";
}
export class post_meta {
    public author: string = "";
    public date: string = "";
}
export class post {
    public img_src: string = "";
    public title: string = "";
    public summary: string = "";
    public stats: post_stats = new post_stats();
    public tags: string[] = [];
    public meta: post_meta = new post_meta();
}