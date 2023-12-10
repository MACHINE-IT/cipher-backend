import { addNewUser, getUserList } from "../controllers/Controllers.js"


const routes = (app) => {
    app.route('/')
        .get(getUserList)
        .post()
    app.route('/add-new-user')
        .post(addNewUser)
}

export default routes