import { Link } from 'react-router-dom';

const Card = ({ userId, title, body , postId}) => {
	return (
		<div className='card'>
			<h2 className='title'>{title}</h2>
			<p>{body}</p>
			<Link to={`/userposts/${userId}`} style={{ fontStyle: 'italic', paddingBottom: '1rem' }}>Blog by: user {userId}</Link><br/>
			<Link to={`/post/${postId}`} style={{textDecoration:'underline', paddingBottom:'1rem', color:'indigo'}}>View Blog details:{postId}</Link>
		</div>
	);
};

export default Card;
