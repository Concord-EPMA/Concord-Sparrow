from ensurepip import version
import psycopg2
from psycopg2 import Error


def createConnection(user, host, port, database, password=None):
    try :
        return psycopg2.connect(user=user,
                                    password=password,
                                    host=host,
                                    port=port,
                                    database=database)
    except Exception as err:
        print(f"Error connecting to the database \n{err}")
        return None


def connectToLocalDB():
    try :
        return psycopg2.connect(user="postgres",
                                    host="localhost",
                                    port=54321,
                                    database="sparrow")
    except Exception as err:
        print(f"\nError connecting to the database \n{err}\n")
        return None


def getVersion():
    dbConnected = connectToLocalDB()
    if dbConnected:
        # Open a cursor to perform database operations
        cur = dbConnected.cursor()
        # Execute a query
        cur.execute("SELECT version();")
        # Retrieve query results
        versionInfo = cur.fetchall()
        # close database connection
        cur.close()
        dbConnected.close()
        return versionInfo
    return None

def getTableNames():
    dbConnected = connectToLocalDB()
    if dbConnected:
        cur = dbConnected.cursor()
        cur.execute("SELECT tablename FROM pg_catalog.pg_tables WHERE schemaname != 'pg_catalog' AND  schemaname != 'information_schema';")
        tableNames = cur.fetchall()
        cur.close()
        dbConnected.close()
        return tableNames
    return None

def getTable(name):
    dbConnected = connectToLocalDB()
    if dbConnected:
        cur = dbConnected.cursor()
        cur.execute(f"SELECT * FROM {name};")
        tableNames = cur.fetchall()
        cur.close()
        dbConnected.close()
        return tableNames
    return None