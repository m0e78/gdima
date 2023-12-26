import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './PostList.css'
import { addDislike, addLike, deletePost } from '../../Js/Actions/actions';
import like from '../../icons/like.png'
import dislike from '../../icons/dislike.png'


/* const mapStateToProps = state => {
    return {
        posts: state.posts
    }
}
const mapDispatchToProps = dispatch => {
    return {
        deleteArticle: id => dispatch(deletePost(id)),
        addLike: id => dispatch(addLike(id)),
        removeLike: id => dispatch(removeLike(id))
    }
} */
const PostList = () => {

    const dispatch = useDispatch()
    const posts = useSelector((state) => state.posts)


    return (

<div>
{posts.map((post) => (
    <Card key={post.id} className='col-4 mx-auto'>  <Card.Header>
    <Card.Title as='h2'>{post.title}</Card.Title>
  </Card.Header>
        
        <Card.Body>
            <Card.Title>{post.content}</Card.Title>
            <Button className='btn btn-danger' onClick={() => dispatch(deletePost(post.id))}>Delete</Button><br />
   
     <img src={like} width="35" alt="like" onClick={() => dispatch(addLike(post.id))} />
                {post.like}
                <img src={dislike} width="35" alt="dislike" onClick={() => dispatch(addDislike(post.id))} />
                {post.dislike}     </Card.Body>
    </Card>
    ))}
</div>

    )

}

// export default connect(mapStateToProps, mapDispatchToProps)(PostList)
export default PostList