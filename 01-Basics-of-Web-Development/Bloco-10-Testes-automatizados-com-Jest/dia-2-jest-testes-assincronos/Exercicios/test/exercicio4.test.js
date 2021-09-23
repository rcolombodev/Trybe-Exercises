const getRepos = require('../src/exercicio4')

it('get names from repos', async () => {
  const url = 'https://api.github.com/orgs/tryber/repos';

  const result = await getRepos(url);
  expect(result).toContain('sd-01-week4-5-project-todo-list');
  expect(result).toContain('sd-01-week4-5-project-meme-generator');
});