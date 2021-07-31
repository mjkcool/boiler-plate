const password = require('./hide.json').mongodb_atlas.user_password

module.exports = {
    mongoURI: `mongodb+srv://mjkcool:${password}@mysite.44udb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
}
