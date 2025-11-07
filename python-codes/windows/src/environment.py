import os

from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

database_config = {
    'host': os.getenv('MYSQL_DB_HOST') or 'localhost',
    'user': os.getenv('MYSQL_DB_USER') or 'root',
    'password': os.getenv('MYSQL_DB_PASSWORD') or '',
    'database': os.getenv('MYSQL_DB_NAME') or 'MyDataBase1',
}

environment = {
    'host': os.getenv('FLASK_HOST') or 'localhost',
    'port': os.getenv('FLASK_PORT') or 3001,
    'debug': os.getenv('FLASK_DEBUG') or True,
    'databaseConfig': database_config,
}
