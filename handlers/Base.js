
class Handler {
    constructor(){
    }

    //parse input, "in"打头

    //parse output, "out"打头
    static outUser (user) {
        return {
            phone: user.phone,
            name: user.name
        }
    }
}

module.exports = Handler;
