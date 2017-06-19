# API Endpoints

## HTML API

### Root
Loads React web app

- `GET /`

## JSON API

### Users

- `POST /api/users`
- `PATCH /api/users`

### Session

- `POST /api/session`
- `DELETE /api/session`

### Projects

- `POST /api/projects`
- `GET /api/projects/:projectId`
- `PATCH /api/projects/:projectId`
- `DELETE /api/projects/:projectId`

### Rewards

- `GET /api/projects/:projectId/rewards`
- `POST /api/projects/:projectId/rewards`
- `DELETE /api/projects/:projectId/rewards/:rewardId`

### contributions

- `POST /api/projects/:projectId/contributions`

### Categories

- `GET /api/categories`
- `GET /api/categories/:categoryId`
- `GET /api/categories/:categoryId/projects`
