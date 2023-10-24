const currentUser = localStorage.getItem('user');
if (currentUser) {
  window.location.href = '/';
} else {
  window.location.href = '/login';
}
