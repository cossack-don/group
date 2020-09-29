# site for job spa

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build

Основные задачи по проекту

1. сделать структуру проекта
3. научиться пользоваться с 2х компов гитом и пушить
4. разработка приложения для работы
5. см курс по вью 
6.добавлять полезные ссылки на гит по vue
7. посмотреть https://www.youtube.com/watch?v=IMYO487lpxg&feature=emb_logo  видео vue


Заметки
1.смотреть структуру старого проекта как шаблон
2. сделать 2 шаблона для dev and prod и залить на гит
6 json https://jsonplaceholder.typicode.com/   -api json




для деплоя продакшена spa

https://www.youtube.com/watch?v=W04ZoOWbqlQ  - видео по деплою spa 

 Инструкция по деплою для spa
https://medium.com/@Roli_Dori/deploy-vue-cli-3-project-to-github-pages-ebeda0705fbd  

That’s the theory! Let’s start:
Say you have a github project and you want to host it on netlify. I’ am just kidding. You are here because you want to host it using github pages.Please follow carefully the following steps:

1-Create a new local branch in your project and name it ‘gh-pages’.
2-Go to github and copy the name of the repository. Let’s assume the repository name is ‘my-first-project’
3-Create a new file in root directory of your project and name it ‘vue.config.js’. Why this name? Check out here why.
4-In ‘vue.config.js’ file paste the following code:
// vue.config.js
module.exports = {
publicPath: ‘/my-first-project/’
}
5-Find and open the file .gitignore located in root directory of your project.Next, find and comment the line which has the text ‘/dist’.
NOTE: this folder it’s ignored by default that’s why we have to comment it.
6-Run npm run build, and wait for it to finish.
7-IMPORTANT!! Before you run the next command make sure you don’t commit the .gitignore and vue.config.js.
8-Run the command: git add dist && git commit -m "Initial dist subtree commit"
9-Run the command: git subtree push --prefix dist origin gh-pages
Navigate to github on your browser and open your repository. Next click ‘Settings’ just like it is displayed below.
9.1 Scroll and find the section GitHub Pages. Select the ‘gh-pages’ branch and click Save.
10. You might have to wait a while, but if everything goes well you will see the following alert message. Generally you have to wait 8–10 minutes until this process is done.

https://cli.vuejs.org/ru/guide/deployment.html#%D0%BE%D0%B1%D1%89%D0%B8%D0%B5-%D1%80%D0%B5%D0%BA%D0%BE%D0%BC%D0%B5%D0%BD%D0%B4%D0%B0%D1%86%D0%B8%D0%B8   - рекомендации при build
https://qna.habr.com/q/590212  подсказка по проблеме с путями при npm run build
https://cli.vuejs.org/ru/config/#%D0%B3n%D0%BE%D0%B1%D0%B0n%D1%8C%D0%BD%D0%B0%D1%8F-%D0%BA%D0%BE%D0%BD%D1%84%D0%B8%D0%B3%D1%83%D1%80%D0%B0%D1%86%D0%B8%D1%8F-cli   - рекомендации при build





Документация по гит для разработки командой

Основные команды git
git pull - обновить данные из серверного репозитория
git add - добавить в список "на коммит"
git commit - создание пакета (коммита) с изменениями
git push - залить за серверный (удалённый) репозиторий
git merge BRANCH - слияние ветки в который ты находишься, с веткой BRANCH


https://yadi.sk/i/eeyEcUKHxdcHu   - дока для работы в гите в 2-м
https://www.youtube.com/watch?v=rnfHuWneMXA&feature=share  (видео) по гиту, команды
https://zen.yandex.ru/media/id/5e824e9e6ae5482256ca8012/nachinaem-rabotat-s-git--poshagovaia-instrukciia-5e85f16d66408b1f83840bfd  -работа с гитом команды
http://dnzl.ru/view_post.php%3Fid%3D317  -работа с гит команды
https://gdecider.github.io/bx_git-shpora.html  - работа с гитом команды



Игра по гиту - для обучения
https://learngitbranching.js.org/?locale=ru_RU


Гит флоу(как создавать ветки и соеденять, модель разработки проектов на гит)
https://www.atlassian.com/ru/git/tutorials/comparing-workflows/gitflow-workflow


VUE полезные ссылки с примерами
https://webdevkin.ru/posts/frontend/adminka-vue-13-router   
https://metanit.com/web/vuejs/

https://m.habr.com/ru/company/ruvds/blog/512658/
http://code.mu/ru/javascript/framework/vue/book/prime/attributes/

видео vue
https://www.youtube.com/watch?v=IMYO487lpxg&feature=emb_logo  
https://www.youtube.com/channel/UCWhg5tJHcR22vlJ5QVz7opg/videos
https://www.youtube.com/playlist?list=PLNkWIWHIRwMH7ahn9uvvc5PG3o1tLscgB



Axios инструкция на русском
https://github.com/klesarev/axios-rus-docs/tree/master/docs

```