import gravatar from '../../utils/gravatar';

test('Gravatar Function test', () => {
  const email = 'gerardozunounitec@gmail.com';
  const gravatarUrl = 'https://gravatar.com/avatar/cb653a7ff6dafe6d8e1a21c7d5811e1b'
  expect(gravatarUrl).toEqual(gravatar(email));
});