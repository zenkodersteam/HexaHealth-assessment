# Notes API (NestJS)

A RESTful CRUD API for a Notes application, backed by an in-memory array. Includes a minimal static HTML/JS frontend for demoing the endpoints in a browser.

## Endpoints

| Method | Endpoint      | Description                |
| ------ | ------------- | -------------------------- |
| POST   | `/notes`      | Create a new note          |
| GET    | `/notes`      | Retrieve all notes         |
| GET    | `/notes/:id`  | Retrieve a note by ID      |
| PUT    | `/notes/:id`  | Update an existing note    |
| DELETE | `/notes/:id`  | Delete a note              |

Request body for `POST` / `PUT`:

```json
{ "title": "string", "content": "string" }
```

## Project structure

```
src/
  notes/
    dto/create-note.dto.ts
    dto/update-note.dto.ts
    entities/note.entity.ts
    notes.controller.ts
    notes.service.ts   # in-memory storage
    notes.module.ts
  app.module.ts
  main.ts
public/
  index.html            # demo frontend (served as a static asset)
```

## Setup & run

```bash
npm install
npm run start:dev
```

The API runs on [http://localhost:3001](http://localhost:3001). Open that URL in a browser to use the demo frontend (create, edit, and delete notes), or call the endpoints directly, e.g.:

```bash
curl -X POST http://localhost:3001/notes -H "Content-Type: application/json" -d "{\"title\":\"Groceries\",\"content\":\"Milk, eggs\"}"
curl http://localhost:3001/notes
```

## Build

```bash
npm run build
npm run start:prod
```
