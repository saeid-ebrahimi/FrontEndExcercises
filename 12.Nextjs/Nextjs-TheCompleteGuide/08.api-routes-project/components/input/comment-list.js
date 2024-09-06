import classes from './comment-list.module.css';

function CommentList(props) {
    if (props.items){
        const {items} = props.items
    }else{
        const items = []
    }
  return (
    <ul className={classes.comments}>
      {
          items.map(commentItem => <li key={commentItem._id}>
              <p>{commentItem.text}</p>
              <div>
                  By <address>{commentItem.email}</address>
              </div>
          </li>)
      }

    </ul>
  );
}

export default CommentList;
