# -*- coding: utf-8 -*-
"""
Created on Fri Jun  2 00:48:08 2023

@author: Santhosh
"""

import sys
from pathlib import Path

project_root = Path(__file__).parent.parent.parent
sys.path.append(str(project_root))

from src.environment import database_config
import mysql.connector as con

dbcon = con.connect(**database_config)
cur = dbcon.cursor()

cur.execute("CREATE DATABASE IF NOT EXISTS database1")

print("Database 'database1' created successfully")

dbcon.close()
