# Meilisearch Commands Guide

This guide provides commands for installing and using Meilisearch, a powerful search engine, using both Docker and manual methods.

## Installation

### Docker Installation

#### 1. Pull Docker Image

Download the Meilisearch Docker image:

```bash
docker pull getmeili/meilisearch:v1.7.3
```

#### 2. Run with Docker

Start Meilisearch server using Docker:

```bash
docker run --name meili-search -it --rm -p 7700:7700 -v "$(pwd)/meili-data:/meili_data" -e MEILI_MASTER_KEY='xyz' getmeili/meilisearch:v1.7.3
```

**Options Explained:**

- `--name`: Container name
- `-it`: Interactive mode
- `--rm`: Remove container after exit
- `-p`: Port mapping (host:container)
- `-v`: Volume mount for data persistence
- `-e`: Environment variable for master key

### Manual Installation

#### 1. Download Binary

Download the Meilisearch binary for your platform:

**For Linux/macOS:**

```bash
curl -L https://install.meilisearch.com | sh
```

**Or download manually from GitHub releases:**

```bash
# Visit https://github.com/meilisearch/meilisearch/releases
# Download the appropriate binary for your OS
```

#### 2. Run Manually

Start the Meilisearch server:

```bash
./meilisearch --master-key xyz --http-addr 127.0.0.1:7700
```

**Additional Options:**

- `--no-analytics`: Disable analytics
- `--db-path`: Specify database path (default: ./data.ms)
- `--env`: Environment (development/production)

## JavaScript SDK Installation

### Install Meilisearch SDK

Install the JavaScript client for interacting with Meilisearch:

```bash
npm install meilisearch
```

## Basic Usage

### 1. Create an Index

```javascript
const { MeiliSearch } = require('meilisearch');

const client = new MeiliSearch({ host: 'http://127.0.0.1:7700', apiKey: 'xyz' });

await client.createIndex('movies');
```

### 2. Add Documents

```javascript
const documents = [
  { id: 1, title: 'The Shawshank Redemption', genre: 'Drama' },
  { id: 2, title: 'Inception', genre: 'Sci-Fi' }
];

await client.index('movies').addDocuments(documents);
```

### 3. Search Documents

```javascript
const searchResults = await client.index('movies').search('shawshank');
console.log(searchResults.hits);
```

### 4. Update Documents

```javascript
await client.index('movies').updateDocuments([
  { id: 1, title: 'The Shawshank Redemption', rating: 9.3 }
]);
```

### 5. Delete Documents

```javascript
await client.index('movies').deleteDocument(1);
```

## Advanced Commands

### 6. Configure Searchable Attributes

```javascript
await client.index('movies').updateSearchableAttributes(['title', 'genre']);
```

### 7. Set Ranking Rules

```javascript
await client.index('movies').updateRankingRules([
  'words',
  'typo',
  'proximity',
  'attribute',
  'sort',
  'exactness'
]);
```

### 8. Add Synonyms

```javascript
await client.index('movies').updateSynonyms({
  'sci-fi': ['science fiction', 'scifi'],
  'thriller': ['suspense']
});
```

### 9. Get Index Stats

```javascript
const stats = await client.index('movies').getStats();
console.log(stats);
```

### 10. Delete an Index

```javascript
await client.deleteIndex('movies');
```

## Server Management

### Check Server Health

```bash
curl http://127.0.0.1:7700/health
```

### View Server Version

```bash
curl http://127.0.0.1:7700/version
```

### Stop Docker Container

```bash
docker stop meili-search
```

---

*Note: Replace 'xyz' with a secure master key. For production, use environment variables and secure configurations. Refer to the [official Meilisearch documentation](https://docs.meilisearch.com/) for more details.*
