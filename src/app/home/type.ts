export type Post = {
  id: number
  title: string
  content: string
  image_url: string
  user_id: string
  created_at: string
  users: User
}

export type User = {
  nickname: string
  profile_image: string
  user_id: string
}

export type NewPost = Omit<Post, "id" | "created_at" | "users">

export type Comment = {
  id: number
  content: string
  user_id: string
  post_id: number
  created_at: string
}

export type CommentProps = {
  comment: Comment
  onEdit: (comment: Comment) => void
}
