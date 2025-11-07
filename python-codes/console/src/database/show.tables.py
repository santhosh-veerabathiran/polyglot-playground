# -*- coding: utf-8 -*-
"""
Created on Fri Jun  2 01:08:54 2023

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

cur.execute("SHOW TABLES")

for i in cur:
    print(i)

dbcon.close()
