# Typesense Commands Guide

This guide provides commands for installing and using Typesense, a powerful search engine, using both Docker and manual methods.

## Installation

### Docker Installation

#### 1. Pull Docker Image
Download the Typesense Docker image:
```bash
docker pull typesense/typesense:26.0
```

#### 2. Run with Docker
Start Typesense server using Docker:
```bash
docker run --name typesense -p 8108:8108 -v "$(pwd)/typesense-data:/data" typesense/typesense:26.0 --data-dir=/data --api-key=xyz --enable-cors
```

**Options Explained:**
- `--name`: Container name
- `-p`: Port mapping (host:container)
- `-v`: Volume mount for data persistence
- `--data-dir`: Directory for data storage
- `--api-key`: API key for authentication
- `--enable-cors`: Enable CORS for web requests

### Manual Installation

#### 1. Download Binary
Download the Typesense binary for your platform:

**For Linux:**
```bash
wget -O typesense-server https://dl.typesense.org/releases/26.0/typesense-server-26.0-linux-amd64
chmod +x typesense-server
```

**For macOS:**
```bash
curl -O https://dl.typesense.org/releases/26.0/typesense-server-26.0-darwin-amd64
chmod +x typesense-server-26.0-darwin-amd64
```

**Or download manually from GitHub releases:**
```bash
# Visit https://github.com/typesense/typesense/releases
# Download the appropriate binary for your OS
```

#### 2. Run Manually
Start the Typesense server:
```bash
./typesense-server --data-dir=./data --api-key=xyz --enable-cors --listen-port=8108
```

**Additional Options:**
- `--log-dir`: Directory for log files
- `--ssl-certificate-path`: Path to SSL certificate
- `--ssl-key-path`: Path to SSL private key

## JavaScript SDK Installation

### Install Typesense SDK
Install the JavaScript client for interacting with Typesense:
```bash
npm install typesense
```

## Basic Usage

### 1. Create a Collection
```javascript
const Typesense = require('typesense');

const client = new Typesense.Client({
  'nodes': [{
    'host': 'localhost',
    'port': '8108',
    'protocol': 'http'
  }],
  'apiKey': 'xyz',
  'connectionTimeoutSeconds': 2
});

const schema = {
  'name': 'movies',
  'fields': [
    {'name': 'title', 'type': 'string'},
    {'name': 'genre', 'type': 'string'},
    {'name': 'year', 'type': 'int32'}
  ]
};

await client.collections().create(schema);
```

### 2. Add Documents
```javascript
const documents = [
  {
    'id': '1',
    'title': 'The Shawshank Redemption',
    'genre': 'Drama',
    'year': 1994
  },
  {
    'id': '2',
    'title': 'Inception',
    'genre': 'Sci-Fi',
    'year': 2010
  }
];

await client.collections('movies').documents().import(documents);
```

### 3. Search Documents
```javascript
const searchParameters = {
  'q': 'shawshank',
  'query_by': 'title'
};

const searchResults = await client.collections('movies').documents().search(searchParameters);
console.log(searchResults.hits);
```

### 4. Update Documents
```javascript
await client.collections('movies').documents('1').update({
  'title': 'The Shawshank Redemption',
  'rating': 9.3
});
```

### 5. Delete Documents
```javascript
await client.collections('movies').documents('1').delete();
```

## Advanced Commands

### 6. Configure Searchable Fields
```javascript
// Set during collection creation with 'query_by' parameter in search
const searchParameters = {
  'q': 'drama',
  'query_by': 'genre,title'
};
```

### 7. Set Ranking and Sorting
```javascript
const searchParameters = {
  'q': 'movie',
  'query_by': 'title',
  'sort_by': 'year:desc',
  'filter_by': 'year:>=2000'
};
```

### 8. Add Synonyms
```javascript
const synonym = {
  'synonyms': ['science fiction', 'sci-fi', 'scifi']
};

await client.collections('movies').synonyms().upsert('sci-fi-synonym', synonym);
```

### 9. Get Collection Stats
```javascript
const stats = await client.collections('movies').retrieve();
console.log(stats);
```

### 10. Export Documents
```javascript
const exportResult = await client.collections('movies').documents().export();
console.log(exportResult);
```

## API Key Management

### 11. Create API Key
```javascript
const key = {
  'description': 'Search-only key',
  'actions': ['documents:search'],
  'collections': ['movies']
};

await client.keys().create(key);
```

### 12. List API Keys
```javascript
const keys = await client.keys().retrieve();
console.log(keys);
```

## Server Management

### Check Server Health
```bash
curl http://localhost:8108/health
```

### View Server Metrics
```bash
curl http://localhost:8108/metrics.json
```

### View Debug Information
```bash
curl http://localhost:8108/debug
```

### Stop Docker Container
```bash
docker stop typesense
docker rm typesense
```

## Advanced Features

### 13. Faceted Search
```javascript
const searchParameters = {
  'q': 'movie',
  'query_by': 'title',
  'facet_by': 'genre,year'
};

const results = await client.collections('movies').documents().search(searchParameters);
console.log(results.facet_counts);
```

### 14. Geo Search
```javascript
// First, add geo field to schema
const geoSchema = {
  'name': 'places',
  'fields': [
    {'name': 'name', 'type': 'string'},
    {'name': 'location', 'type': 'geopoint'}
  ]
};

// Then search
const geoSearchParams = {
  'q': '*',
  'query_by': 'name',
  'filter_by': 'location:(48.8566, 2.3522, 100 km)',  // Paris within 100km
  'sort_by': '_geodist(location, 48.8566, 2.3522):asc'
};
```

### 15. Multi-Search
```javascript
const commonSearchParams = {
  'q': 'movie',
  'query_by': 'title',
  'limit': 10
};

const multiSearchRequests = [
  Object.assign({}, commonSearchParams, { 'collection': 'movies' }),
  Object.assign({}, commonSearchParams, { 'collection': 'tv_shows' })
];

const results = await client.multiSearch.perform(multiSearchRequests);
```

### 16. Analytics
```javascript
const analyticsRules = {
  'name': 'popular_queries',
  'type': 'popular_queries',
  'params': {
    'source': {
      'collections': ['movies']
    },
    'destination': {
      'collection': 'query_suggestions'
    },
    'limit': 100
  }
};

await client.analytics().rules().upsert('popular_queries', analyticsRules);
```

---

*Note: Replace 'xyz' with a secure API key. Typesense uses HTTP by default; use HTTPS in production. Refer to the [official Typesense documentation](https://typesense.org/docs/) for more details.*
