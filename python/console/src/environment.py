from dotenv import load_dotenv
import os

# Load environment variables from .env file
load_dotenv()

database_config = {
    'host': os.getenv('MYSQL_DB_HOST') or 'localhost',
    'user': os.getenv('MYSQL_DB_USER') or 'root',
    'password': os.getenv('MYSQL_DB_PASSWORD') or '',
    'database': os.getenv('MYSQL_DB_NAME') or 'MyDataBase1',
}
