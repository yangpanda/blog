yarn build

Push-Location dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:yangpanda/yangpanda.github.io.git master

Pop-Location