GlowCare

GlowCare е веб апликација за персонализирана нега на кожа која генерира skincare рутини врз основа на тип на кожа и ниво на акни.

Автор

Ениса Керим

Технологии

Frontend: Vue.js, Vite, Vue Router, Pinia

Backend: Node.js, Express

База: PostgreSQL

Главни функционалности

Прикажување на козметички производи

Кошничка и омилени производи

SkinRoutine систем за препорака на производи

Web scraping за автоматско собирање на податоци за производи

Backend

GET /api/products – ги враќа сите производи

POST /recommend – генерира skincare рутина според тип на кожа

База на податоци

Табела products содржи:

id

name

price

image

category

skin_type

acne_level

Инсталација

Клонирај го проектот:

git clone https://github.com/EnisaK2004/Skincare-Website.git

Инсталирај dependencies и стартувај:

npm install
npm run dev

Backend:

cd src/backend
npm install
node server.js
