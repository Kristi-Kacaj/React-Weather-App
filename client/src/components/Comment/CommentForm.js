import React, { Component } from 'react';
import style from './style';
import './Comment.css';



class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = { user_name: '', comment: '' , allComments: []};
    this.handleAuthorChange = this.handleAuthorChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleAuthorChange(e) {
    this.setState({ user_name: e.target.value });
  }
  handleTextChange(e) {
    this.setState({ comment: e.target.value });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    //debugger
    let user_name = this.state.user_name.trim();
    let comment = this.state.comment.trim();
    if (!comment || !user_name) {
      return;
    } 
    //this.props.onCommentSubmit({ user_name: user_name, comment: comment });
//make the API call

  
    fetch({url: 'http://localhost:5000/comments/add',method: "POST", body: JSON.stringify({user_name, comment})}).then(x=>{
      console.log(x)
      this.setState({ user_name: '', comment: '' })

    }
    ).catch(err=>console.error("FETCH ERROR!:",err))
    }
  getComment = c => {
    fetch('http://localhost:5000/comments')
    .then(response => response.json())
    .then(({data}) =>{
      console.log(data)
      this.setState({allComments: data})
    })
  
  .catch(err =>console.error(err))
    
  }



  
  componentDidMount(){
    this.getComment()
  }
  
  render() {
    return (
      <div>
      <form style={ style.commentForm } onSubmit={ this.handleSubmit }>
        <input
          type='text'
          placeholder='Your name...'
          style={ style.commentFormAuthor}
          value={ this.state.user_name }
          onChange={ this.handleAuthorChange } />
        <input
          type='text'
          placeholder='Say something...'
          style={ style.commentFormText}
          value={ this.state.comment }
          onChange={ this.handleTextChange } />
        <input
          type='submit'
          style={ style.commentFormPost }
          value='Add '
          
          
          
          />

          <div>

            
      {this.state.allComments.map(c => 
        <p>{c.user_name} says: {c.comment}</p>
      )}
    </div>

      </form>

      </div>
    )
  }
}

export default CommentForm;
