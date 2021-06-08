import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import FourOhFour from './pages/404';
import Home from './pages/Home';
import Posts from './pages/Posts';
import UserPosts from './pages/UserPosts';

const App = () => {
	return (
		<Router>
			<h1 style={{margin:'auto', textAlign:'center', paddingBottom:'2rem', textShadow: '2px 3px #887070'}}>Blog posts</h1>
			<Switch>
				{/* render Home Component when we hit /home */}
				<Route exact path='/home'>
					<Home />
				</Route>
				{/* render Post Component when we hit /post */}
				<Route exact path='/post/:postid'>
					<Posts />
				</Route>
				{/* render UserPost Component when we hit /userpost */}
				<Route exact path='/userposts/:userid'>
					<UserPosts />
				</Route>

				{/* fallback to a 404 if a route is not matched */}
				<Route>
					<FourOhFour />
				</Route>
			</Switch>
		</Router>
	);
};

export default App;
