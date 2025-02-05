# 🦸‍♂️ Superheroes API with NestJS

## 📌 Description

This project is an **API built with NestJS** that manages an in-memory database of superheroes. You can add new superheroes and retrieve a list of existing ones, sorted by their humility score.

## 🚀 Features

- **NestJS Framework**: Modular and efficient architecture.
- **Validation with `class-validator`**: Ensures that received data is correct.
- **In-memory database**: Temporarily stores superheroes in an array.
- **Unit testing with Jest**: Verifies API functionality.

## 📂 Project Structure

```
📦 Project
 ┣ 📂 data
 ┃ ┗ 📜 superheroes.ts
 ┣ 📂 src
 ┃ ┣ 📜 app.controller.spec.ts
 ┃ ┣ 📜 app.controller.ts
 ┃ ┣ 📜 app.module.ts
 ┃ ┣ 📜 app.service.ts
 ┃ ┣ 📜 main.ts
 ┣ 📂 test
 ┣ 📜 .gitignore
 ┣ 📜 package.json
 ┣ 📜 tsconfig.json
 ┗ 📜 README.md
```

## 📌 Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/franndeli/HumbleHeroeAPI
   cd HumbleHeroeAPI
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Run the application:
   ```sh
   npm run start
   ```

## 🛠 Available Endpoints

### 🔹 Get all superheroes

- **Route:** `GET /superheroes`
- **Response:**
  ```json
  [
    {
      "id": "1738754112181",
      "name": "Batman",
      "superpower": "Detective",
      "humility_score": 85
    }
  ]
  ```

### 🔹 Add a superhero

- **Route:** `POST /superheroes`
- **Body:**
  ```json
  {
    "name": "Spiderman",
    "superpower": "Spider-sense",
    "humility_score": 90
  }
  ```
- **Response:**
  ```json
  {
    "id": "1738754112181",
    "name": "Spiderman",
    "superpower": "Spider-sense",
    "humility_score": 90
  }
  ```

## ✅ Testing with Jest

To run unit tests, use the following command:

```sh
npm test
```

The tests verify:

- That the superhero list is initially empty.
- That superheroes can be added correctly.

## 🤝 Team Player Attitude

To collaborate with a teammate on this project, I would first sit down to clearly define the steps needed for development. This ensures that both of us have the same vision of the product we want to build. Additionally, I would propose some ideas open to discussion to gather my teammate's opinions and refine the approach together.

## ⏳ If I had more time

f I had more time, I would expand the range of API calls to include full CRUD operations. This would make the service much more complete, scalable, and efficient.
