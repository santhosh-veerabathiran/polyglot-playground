# Polyglot Playground

Practice programs, small apps and study notes across a dozen languages and tools — from C pattern programs to an Nx-powered NestJS monorepo, plus Meilisearch and Typesense experiments and a set of CLI cheat sheets.

Each top-level folder is self-contained: pick a language, open its folder, and run it with that language's usual toolchain.

---

## What's inside

| Folder | Stack | Highlights |
|---|---|---|
| [`c/`](c) | C | Number theory (Armstrong, Disarium, Harshad, spy, neon, prime…), star/number/string patterns, array search & sort, matrices, recursion, strings |
| [`cpp/`](cpp) | C++ | The same pattern, array, matrix and string exercises in C++ |
| [`java/`](java) | Java, Maven | Console app (binary search, bubble sort, min/max) and a Swing app (bio-data form, notepad, MySQL student table over JDBC) |
| [`python/`](python) | Python | **console** — data types, collections, strings, exceptions, OOP, files, MySQL · **web** — Flask pages with a MySQL-backed student form · **windows** — Tkinter bio-data form, notepad, login and employee table |
| [`javascript/node/`](javascript/node) | TypeScript, Node.js | Basics, argument handling, array and number helpers |
| [`javascript/express/`](javascript/express) | Express, Pug | A minimal Express web app with routes, views and error handling |
| [`javascript/nest/`](javascript/nest) | NestJS, Nx, TypeORM | Monorepo with `gateway`, `database`, `fastify`, `files`, `redis` and `typesense` apps plus shared `constants`, `interfaces` and `utilities` libs |
| [`php/`](php) | PHP, Composer | Login/logout with sessions, image upload (to disk and to MySQL), matrix operations, MySQL CRUD |
| [`html/`](html) | HTML, CSS, JavaScript | Multi-step and multi-slide forms, popup form, payment page, search bar, sign-in page, a landing page, plus HTML/CSS notes |
| [`vb/`](vb) | VB.NET, .NET Framework 4 | Console app, ASP.NET Web Forms app and a Windows Forms app |
| [`visual-csharp/`](visual-csharp) | C#, .NET Framework 4 | Console app, ASP.NET Web Forms app and a Windows Forms app |
| [`databases/`](databases) | MSSQL, MS Access | Sample `.mdf` and `.accdb` databases with MSSQL topic notes |
| [`search-engines/`](search-engines) | Meilisearch, Typesense | TypeScript scripts for indexes/collections, documents, search, multi-search, facets, synonyms, overrides, aliases, API keys and tasks, with `books` and `movies` datasets |
| [`commands/`](commands) | Cheat sheets | git, npm, Node, Nx, NestJS, Express, Redis, PowerShell, Meilisearch, Typesense |

## Repository layout

```
polyglot-playground/
├── c/ · cpp/                 src/ (by topic) + notes/ (PDF & Word)
├── java/                     console/ · windows/        (Maven projects)
├── python/                   console/ · web/ · windows/
├── javascript/
│   ├── node/                 TypeScript basics
│   ├── express/web/          Express + Pug app
│   └── nest/console/         Nx monorepo — apps/ + libs/
├── php/web/                  Composer project, src/ by topic
├── html/                     src/ samples + notes/
├── vb/ · visual-csharp/      Console/ · Web/ · Windows/  (Visual Studio solutions)
├── databases/                access/ · mssql/
├── search-engines/           meili/ · typesense/ · datasets/
└── commands/                 *_commands.md cheat sheets
```

## Getting started

Clone the repo, then follow the section for the folder you want to try.

```bash
git clone https://github.com/santhosh-veerabathiran/polyglot-playground.git
cd polyglot-playground
```

### Configuration

Programs that talk to a database or search engine read their settings from a `.env` file next to the project (`.env` files are git-ignored). Every value has a local default, so you only need to set what differs on your machine — for example, for the Python and PHP MySQL programs:

```dotenv
MYSQL_DB_HOST=localhost
MYSQL_DB_USER=root
MYSQL_DB_PASSWORD=your_password
MYSQL_DB_NAME=MyDataBase1
```

Check the folder's `environment.py`, `environment.php` or `environment.ts` for the exact variable names it uses.

### C / C++

```bash
gcc c/src/number/factorial.c -o factorial && ./factorial
g++ cpp/src/pattern/star/<file>.cpp -o pattern && ./pattern
```

### Java

```bash
cd java/console && mvn compile exec:java -Dexec.mainClass=number.MinMax
```

The Swing app in `java/windows` needs a running MySQL server for the database screens.

### Python

```bash
pip install python-dotenv mysql-connector-python flask
cd python/console && python src/number/armstrong.mumber.py
```

`python/web` runs Flask apps (`python src/basics/app.py`) and `python/windows` runs Tkinter apps (`python src/app/notepad.py`).

### JavaScript

```bash
# Node (TypeScript)
cd javascript/node && npm install && npx ts-node src/number/minimum.ts

# Express
cd javascript/express/web && npm install && npm start      # http://localhost:3000

# NestJS monorepo
cd javascript/nest/console && npm install && npx nx serve gateway
```

Each Nest app has its own `serve` target (`npx nx serve database`, `npx nx serve redis`, …). The `database`, `redis` and `typesense` apps expect those services to be running.

### PHP

```bash
cd php/web && composer install
php -S localhost:8000 -t src      # then open e.g. http://localhost:8000/login/Index.php
```

### VB.NET and C#

Open the `.sln` file in `vb/<App>/` or `visual-csharp/<App>/` with Visual Studio (Windows, .NET Framework 4).

### Search engines

Start the engines with Docker from their folders, so the server data lands in the git-ignored `data/` directory (see [`commands/`](commands) for what each option does):

```bash
cd search-engines/meili
docker run --name meili-search -it --rm -p 7700:7700 \
  -v "$(pwd)/data:/meili_data" -e MEILI_MASTER_KEY='xyz' getmeili/meilisearch:v1.7.3

# in a second terminal, from the repo root
cd search-engines/typesense
docker run --name typesense -p 8108:8108 \
  -v "$(pwd)/data:/data" typesense/typesense:26.0 --data-dir=/data --api-key=xyz --enable-cors
```

Then run a script, for example:

```bash
cd search-engines/typesense/javascript && npm install && npx ts-node src/collection/books.ts
```

The `books` and `movies` datasets live in [`search-engines/datasets/`](search-engines/datasets). The `xyz` key is a local development placeholder.

## Cheat sheets

| Tool | Sheet |
|---|---|
| Git | [git_commands.md](commands/git_commands.md) |
| npm | [npm_commands.md](commands/npm_commands.md) |
| Node.js | [node_commands.md](commands/node_commands.md) |
| Nx | [nx_commands.md](commands/nx_commands.md) |
| NestJS | [nestjs_commands.md](commands/nestjs_commands.md) |
| Express | [express_commands.md](commands/express_commands.md) |
| Redis | [redis_commands.md](commands/redis_commands.md) |
| PowerShell | [powershell_commands.md](commands/powershell_commands.md) |
| Meilisearch | [meili_commands.md](commands/meili_commands.md) |
| Typesense | [typesense_commands.md](commands/typesense_commands.md) |

## Notes

Study notes sit next to the code they cover:

- [`c/notes/`](c/notes) and [`cpp/notes/`](cpp/notes) — PDF volumes and Word topic notes
- [`java/notes/`](java/notes) — Word notes
- [`html/notes/`](html/notes) — HTML and CSS notes
- [`databases/mssql/notes/`](databases/mssql/notes) — MSSQL topics

## Code style

- JavaScript/TypeScript and PHP projects are formatted with Prettier (`npm run format` where available); PHP also uses PHP-CS-Fixer.
- Python is formatted with Black and isort (settings in each `pyproject.toml`).
- Java follows the Google Java style (`config/eclipse-java-google-style.xml`).
- Folders and files use lowercase, dot-separated names by topic (`src/number/armstrong.number.c`).
