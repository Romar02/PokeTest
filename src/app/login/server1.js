import User from '../../models/User';

export default async function server1() {
    console.log(User)
    return (
    	<div>
        	<h1>server here!</h1>
        </div>
    );
}