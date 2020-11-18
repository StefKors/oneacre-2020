const TEAM = ['stef.kors@gmail.com', 'doukavictora@gmail.com', 'titusknegtel@gmail.com']

export default function ({ $auth }) {
  if (!$auth.loggedIn) {
    return
  }

  if (!TEAM.includes($auth.user.email)) {
    console.log('❌ user not authorized');
    $auth.logout()
    return
  }
}
