import { addNewUser, getUserList, updateSequence } from "../controllers/Controllers.js"


const routes = (app) => {
    app.route('/')
        .get(getUserList)
        .put(updateSequence)
        .post()
    app.route('/add-new-user')
        .post(addNewUser)
}

export default routes
