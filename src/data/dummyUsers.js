// Dummy accounts for previewing the login flow until the backend is ready.
// Remove this file once real authentication is wired up.
export const dummyUsers = [
  {
    role: 'student',
    name: 'Aline Uwase',
    email: 'student@igire.org',
    password: 'student123',
    redirectTo: '/participant/dashboard',
  },
  {
    role: 'staff',
    name: 'Jean Mugisha',
    email: 'staff@igire.org',
    password: 'staff123',
    redirectTo: '/staff/dashboard',
  },
]

export function findDummyUser(role, email, password) {
  return dummyUsers.find(
    (user) =>
      user.role === role &&
      user.email.toLowerCase() === email.trim().toLowerCase() &&
      user.password === password
  )
}
