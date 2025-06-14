# Aplikasi Jasa Grooming Peliharaan

## How to install

#### Requirements

- Nodejs
- MongoDB
- Code Editor (VS Code preferably)

#### Installasi and Project Setup

1. Git Clone / download project ini
2. Buka Mongodb (Terminal / CLI Terserah), Lalu buat database pet_groom_service.
3. Copy connectiong string database
4. Buat File .env di dalam project dan masukan seperti berikut

```
MONGO_URI=mongodb://localhost:27017/pet_groom_db
PORT=3000
SECRET_KEY=secret_key
```

5. Buka terminal di project tersebut dan jalankan perintah

```
npm install
```

6. Buka 2 terminal. Jalan perintah berikut

```
# Terminal 1
cd backend
npm run dev

#Terminal 2
cd frontend
npm run dev
```

4. Masukan link localhost yang berada di frontend ke browser.
