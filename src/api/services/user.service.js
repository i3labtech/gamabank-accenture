const repository = require('../repository/user.repository')



const createAccount = async (newUser) => {


    //TODO: Verficar se usuario já existe
    const result = await repository.save(newUser)
    return result

}


module.exports = { createAccount }