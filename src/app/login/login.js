import User from '../../models/User';

async function login(){
    let email = document.getElementById('login-form-email');
    let username = document.getElementById('login-form-username');
    let password = document.getElementById('login-form-password');
    let confirmPassword = document.getElementById('login-form-confirm-password');
    const userSameUsername = await User.findAll({
        where: {
          [Sequelize.Op.or]: [{ username: username.value }],
        },
    });
    if(userSameUsername.length>0) {
        username.value=""
        return username.placeholder="Erreur"
    }
    if(password!==confirmPassword){
        password.value=""
        confirmPassword.value=""
        return password.placeholder="Erreur"
    }
    User.create({
        email: email.value,
        username: username.value,
        password: password.value,
    }).then((x) => {
        console.log('User cree');
    });
}

export function loginMain() {
    return (
        <div>
            <div  class="login-form-input"> <div class="login-label">e-mail</div> <input id="login-form-email" placeholder='Jean-01101@gmail.com'></input> </div>
            <div  class="login-form-input"> <div class="login-label">username</div> <input id="login-form-username" placeholder='Pseudonyme'></input> </div>
            <div  class="login-form-input"> <div class="login-label">Password</div> <input id="login-form-password" placeholder='********'></input> </div>
            <div  class="login-form-input sign-up"> <div class="login-label">Confirm password</div> <input id="login-form-confirm-password" placeholder='********'></input> </div>
            <button onClick={()=>login()}>Continue</button>
        </div>
    );
}