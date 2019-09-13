//Filling NavBar section
let navMap = {
    'About me': '#aboutme',
    'Skills': '#skills',
    'Sertificates': '#sertificates',
    'Contacts': '#contacts',
    'Download CV': './docs/CV R.Sabirov.pdf'
}
let navItemBegin = '<li class="nav-item active">'
let navItemEnd = '</li>'
$.each(navMap, function (key, value) {
    $('.navbar-nav').append(navItemBegin+
        '<a class="nav-link" href="' + value + '" >' + key + '</a>'+
        navItemEnd)
});

// Filling Skills section
let more3yrs = ['Qt/C++', 'Linux', 'ElasticSearch', 'Debian', 'Ubuntu'];
let more1yrs = ['ArchLinux', 'Git', 'Mercurial', 'Java', 'Python', 'Bash (Shell Scripting)'];
let less1yrsFavorite = ['JavaScript', 'Vue/Vuex', 'React/Redux', 'Node.JS'];
let less1yrs = ['HTML', 'CSS', 'SCSS', 'Bootstrap', 'Bulma', 'SQL', 'MySQL', 'MSSQL', 'MongoDB', 'PHP', 'WordPress','C#', 'ASP.NET', 'ADO.NET'];

function fillSkillSection(arr, colorStyle, targetObject) {
    $.each(arr, function (index, value) {
        $(targetObject).append('<span class="badge badge-pill badge-' + colorStyle + '">' +
            value +
            '</span>')
    });
}
fillSkillSection(more3yrs, 'success', '.more3yrs');
fillSkillSection(more1yrs, 'info', '.more1yrs');
fillSkillSection(less1yrsFavorite, 'warning', '.less1yrsFavorite');
fillSkillSection(less1yrs, 'secondary', '.less1yrs');

// Filling Sertificates
let sertsMap = {
    'GeekBrains Node.js': 'https://geekbrains.ru/certificates/606915.en',
    'GeekBrains JavaScript Level 1': 'https://geekbrains.ru/certificates/583940.en',
    'GeekBrains JavaScript Level 2': 'https://geekbrains.ru/certificates/599663.en',
    'GeekBrains HTML & CSS': 'https://geekbrains.ru/certificates/575097.en',
    'GeekBrains HTML5 & CSS3. Advanced': 'https://geekbrains.ru/certificates/569244.en',
    'GeekBrains SQL': 'https://geekbrains.ru/certificates/184263.en',
    'GeekBrains Java Level 1': 'https://geekbrains.ru/certificates/188396.en',
    'GeekBrains Java Level 2': 'https://geekbrains.ru/certificates/209396.en',
    'GeekBrains English Pre-Intermediate': 'https://geekbrains.ru/certificates/442494.en',
    'SoloLearn HTML': 'https://www.sololearn.com/Certificate/1014-940200/pdf/',
    'GeekBrains Web development intensive': 'https://geekbrains.ru/certificates/478769.en'
}
let sertItemBegin = '<li class="list-group-item">';
let sertItemEnd = '</li>';
$.each(sertsMap, function (key, value) {
   $('.list-serts').append(sertItemBegin+
    '<a href="' + value + '" target="_blank" class="text-info">' + key + '</a>'+
    sertItemEnd)
});