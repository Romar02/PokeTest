'use client';

export default function client() {
    return (
    	<div>
            <form action='../api/login'>
                <input type='text' name='email' placeholder='Email' required></input><br/>
                <input type='text' name='username' placeholder='Username' required></input><br/>
                <input type='password' name='password' placeholder='Password' required></input><br/>
                <input type='password' name='confirmPassword' placeholder='Confirm Password' required></input><br/>
                <input type="submit" value="Login"/>
            </form>
        	<h1>Server Component Below : </h1>
        </div>
    );
}