import './style.scss'

const langRu = document.getElementById('lang-ru'),
      langEn = document.getElementById('lang-en');

const helloText = document.getElementById('hello'),
      descriptionText = document.getElementById('description'),
      skillsText = document.getElementById('skills'),
      futureSkillsText = document.getElementById('futureSkills'),
      worksText = document.getElementById('works'),
      covidGlobusText = document.getElementById('covidGlobus'),
      stackOfProjectText = document.querySelectorAll('stackOfProject'),
      restarauntText = document.getElementById('restaraunt'),
      madeWithText = document.getElementById('madeWith'),
      covidStatsText = document.getElementById('covidStats'),
      expensesText = document.getElementById('expenses'),
      myResumeText = document.getElementById('myResume'),
      chatToMeText = document.getElementById('chatToMe');

const languages = {
    english: {
        hello: 'Hi! I am Anton Yatsenko,\n Front-end Developer 👦',
        description: `I will help you create a product,\n which your users will be happy with`,
        skills: 'My technology stack:',
        futureSkills: 'What technologies attract my attention',
        works: 'My works',
        covidGlobus: 'Visualization of the spread of coronavirus on the globe',
        stackOfProject: 'Stack in project',
        restarauntSite: 'Website of restaraunt',
        expensesApp: 'Expenses App',
        madeWith: 'Made on',
        covidStatsSite: 'Website with coronavirus stats',
        myResume: 'My resume:',
        chatToMe: 'Chat to me:'
    },
    russian: {
        hello: 'Привет! я Антон Яценко,\n Фронтенд разработчик 👦',
        description: `Я помогу вам создать продукт,\n которым будут довольны ваши пользователи`,
        skills: 'С чем я умею работать:',
        futureSkills: 'Какие технологии привлекают моё внимание:',
        works: 'Мои работы',
        covidGlobus: 'Визуализация распространения короновируса на глобусе',
        stackOfProject: 'Технологии в проекте',
        restarauntSite: 'Сайт ресторана',
        expensesApp: 'Приложение для отслеживание затрат',
        madeWith: 'Сделано на',
        covidStatsSite: 'Сайт с подробной статистикой распространения коронавируса',
        myResume: 'Моё резюме:',
        chatToMe: 'Свяжитесь со мной:'
    }
}

langRu.addEventListener('click', function () {
    helloText.innerText = languages.russian.hello;
    descriptionText.innerText = languages.russian.description;
    skillsText.innerText = languages.russian.skills;
    futureSkillsText.innerText = languages.russian.futureSkills;
    worksText.innerText = languages.russian.futureSkills;
    covidGlobusText.innerText = languages.russian.covidGlobus;
    stackOfProjectText.forEach(item => item.innerText = languages.russian.stackOfProject);
    restarauntText.innerText = languages.russian.restarauntSite;
    expensesText.innerText = languages.russian.expensesApp;
    madeWithText.innerText = languages.russian.madeWith;
    covidStatsText.innerText = languages.russian.covidStatsSite;
    myResumeText.innerText = languages.russian.myResume;
    chatToMeText.innerText = languages.russian.chatToMe;
    langEn.classList.remove('main_heading-language-active');
    this.classList.add('main_heading-language-active');
})

langEn.addEventListener('click', function () {
    helloText.innerText = languages.english.hello;
    descriptionText.innerText = languages.english.description;
    skillsText.innerText = languages.english.skills;
    futureSkillsText.innerText = languages.english.futureSkills;
    worksText.innerText = languages.english.futureSkills;
    covidGlobusText.innerText = languages.english.covidGlobus;
    stackOfProjectText.forEach(item => item.innerText = languages.english.stackOfProject);
    restarauntText.innerText = languages.english.restarauntSite;
    expensesText.innerText = languages.english.expensesApp;
    madeWithText.innerText = languages.english.madeWith;
    covidStatsText.innerText = languages.english.covidStatsSite;
    myResumeText.innerText = languages.english.myResume;
    chatToMeText.innerText = languages.english.chatToMe;
    langRu.classList.remove('main_heading-language-active');
    this.classList.add('main_heading-language-active');
})

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js');
    });
}