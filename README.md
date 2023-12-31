# react6_19.09

ДЗ 6. Countries App

👩🏻‍💻 Demo: https://youtu.be/s8Zm4dVD82Y

Додаток для відображення даних про країни.

Tech stack:
1. React
2. React Router
3. Redux
4. React-redux
5. 🌟 MUI
Вхідні дані – https://raw.githubusercontent.com/brightestsirius/React_23/master/final_project/src/store/data.js

Сторінки/Routes:
1. Home
a. Компоненти сторінки:
i. Home Component. Компонент для відображення тексту, наприклад <h3>Home Component 🏡</h3>
ii. Country Form Component. Компонент з формою. Складові форми:
1. Select з вибором столиці країни – властивість country.capitals[0]. Приклад для Ukraine: <option>🇺🇦 Kyiv</option>.❗️Важливо: при виборі столиці:
a. В другому Select з мовами має сформуватись відповідний перелік country.translations.
b. В кнопці Read more about {country} формується відповідна назва країни.
2. Select з вибором мови перекладу країни – властивість country.translations. Приклад для Ukraine:
a. <option>ara</option>
b. <option>bre</option>
c. <option>ces</option>
3. Кнопка Read more about {country}, де country – назва країни в залежності від вибраної столиці в першому Select з переліком столиць.
4. При submit форми має спрацювати redirect на сторінку "/countries/{country}?translation={translation}", де {country} – країна відповідно до обраної столиці в першому Select, {translation} – обрана мова з другого Select.
2. Countries
a. Компоненти сторінки:
i. Countries List Component. Компонент для відображення списку країн. Кожен пункт списку складається з:
1. Прапор країни – властивість country.flag.
2. Назва країни – властивість country.name.official. При натисканні на назву країни має спрацьовувати редірект на сторінку "/countries/{country}", де {country} – відповідна назва країни.
3. Кнопка Delete. При натисканні на кнопку – пункт видаляється зі списку і зі store.countries.
3. Country
a. Компоненти сторінки:
i. Country Card Component. Компонент для відображення даних про країну. Картка складається з:
1. <h3>{сountry name}</h3>, де {сountry name} – назва властивості country.name.official.❗️Важливо: якщо перехід на сторінку Country відбувся при submit CountryFormComponent, то в залежності від значення параметру translation в searchParam значення {сountry name} буде виводитись з властивості country.translations[{translation}].official. Наприклад, якщо на сторінці Home в формі була вибрана столиця Kyiv і мова ces, то при submit форми срацьовує редірект на сторінку "/countries/Ukraine?translation=ces". В h3 буде назва країни "Ukrajina" з властивості country.translations["ces"].official.
2. Список з усіма даними країни. Всі властивості виводимо циклом.
3. Кнопка Delete. При натисканні на кнопку:
a. Об'єкт з країною видаляється зі store.countries
b. Відбуваєтсья редірект на сторінку Countries.
ii. Redirect Button Component. Компонент для відображення кнопки, при натисканні на яку буде спрацьовувати редірект на вказаний роут. Наприклад, для сторінки Country кнопка матиме текст "Back to Countries" і буде редиректити на роут "countries".
