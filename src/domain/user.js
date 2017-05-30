var UserDto = require('../repository/userModel');
function User(userId,userName){
  var userId = userId;
  var userName = userName;

  function toDto(){
    return new UserDto({userId,userName});
  }
  return {
    userId: userId,
    userName: userName,
    toDto: toDto
  }
}
module.exports = User;