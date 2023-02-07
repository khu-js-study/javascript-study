/**
 * @description
 * user 객체를 받아 유저 정보를 출력한다.
 *
 * @param {object} user
 * @returns {string}
 */
function getUserInfo({ user }) {
  // 처음 함수 호출시 user는 undefined이다.
  // getUserInfo는 정상적으로 호출될 수 있을까?
  return user.name;
}
