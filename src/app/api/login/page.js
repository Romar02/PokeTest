import User from '../../../models/User';
import { useRouter } from 'next/navigation'

export default async function handler(req, res) {
    // console.log('req.method')
    // return (
    //     <div>bbbbbs</div>
    // )
    // Using POST
        // let email = req.body.email;
        // let username = req.body.username;
        // let password = req.body.password;
        // let confirmPassword = req.body.confirmPassword;

        // Using GET
        const router = useRouter();
        const { email, username, password, confirmPassword } = router.query;

        const userSameUsername = await User.findAll({
            where: {
              [Sequelize.Op.or]: [{ username: username.value }],
            },
        });
        if(userSameUsername.length>0) {
            // username.value=""
            res.status(500).json({ error: 'Username already exist' })
            res.redirect("/")
            return
        }
        if(password!==confirmPassword){
            // password.value=""
            // confirmPassword.value=""
            res.status(500).json({ error: 'Password not the same' })
            res.redirect("/")
            return
        }
        User.create({
            email: email.value,
            username: username.value,
            password: password.value,
        }).then((x) => {
            res.status(200).json({ message: 'User created' })
            res.redirect("/")
            console.log('User cree');
        });
}