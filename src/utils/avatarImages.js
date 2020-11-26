const imagesMap = {
  1: 'assets/images/avatars/1.svg',
  2: 'assets/images/avatars/2.svg',
  3: 'assets/images/avatars/3.svg',
  4: 'assets/images/avatars/4.svg'
};

export function getUserAvatar(id) {
  return imagesMap[id];
}
