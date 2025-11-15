# MindWork - Backend (Node.js + Express + MongoDB Atlas)
Projeto backend template para a Global Solution MindWork.

## Requisitos
- Node.js 18+ (recomendado)
- Uma conta no MongoDB Atlas (cluster gratuito)

## Instalação Rápida
1. Copie `.env.example` para `.env` e configure `MONGO_URI` e `JWT_SECRET`.
2. `npm install`
3. `npm run seed` (opcional - insere dados de teste)
4. `npm run dev`

## Endpoints principais
- `POST /api/auth/register` — registrar usuário
- `POST /api/auth/login` — login (retorna JWT)
- `GET /api/users` — lista usuários (protegido)
- `GET /api/courses` — lista cursos
- `GET /api/companies` — lista empresas
- `GET /api/skillsmap` — lista habilidades

## Observações
- Server configura por padrão a porta `3001`, altere em `.env` se quiser.
- O seed script apagará coleções e inserirá dados genéricos de teste.
