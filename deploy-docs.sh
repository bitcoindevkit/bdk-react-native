rm -rf ./site/
mkdocs build
cd site
git init .
git switch --create gh-pages
git add .
git commit --message "Deploy $(date +"%Y-%m-%d")"
git remote add upstream git@github.com:bitcoindevkit/bdk-rn.git
git push upstream gh-pages --force
cd ..
