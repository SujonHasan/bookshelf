const {createUser, login} = require("./user.controller");


function UserRoutes(app){

    app.route('/register')
        .post(createUser)

    app.route('/login')
        .post(login)

}

module.exports = UserRoutes;