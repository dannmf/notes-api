const AppError = require

class UsersController {

    createUser(request, response){
        const { name, email, password } = request.body;
        response.json({ name, email, password });
    }
}

module.exports = UsersController;