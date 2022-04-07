from flask import Flask, render_template, request, url_for, flash, redirect
import logging,db

app = Flask(__name__, template_folder="templates")
# required for input validation messages from [flash("error msg")] function
app.config['SECRET_KEY'] = 'df0331cefc6c2b9a5d0208a726a5d1c0fd37324feba25506'

logging.basicConfig(level=logging.DEBUG)

@app.context_processor
def inject_enumerate():
    return dict(enumerate=enumerate)

@app.route('/sparrow_db_connection_error', methods=["GET"])
def dbConnErr():
    return render_template('connectionError.html')

# ********** HOME PAGE ***********
@app.route('/', methods=["GET"])
def index():
    dbVersion = db.getVersion()
    if dbVersion:
        dbVersion = dbVersion[0][0].split(',')[0]
        return render_template('index.html', versionInfo=dbVersion)
    return redirect(url_for('dbConnErr'))

# ********* VIEW SPARROW TABLE NAMES ************
@app.route('/table_names', methods=["GET"])
def showTableNames():
    tableNames = db.getTableNames()
    if tableNames:
        # analysis
        # x = db.getTable("user")
        # app.logger.info(f"\n\n{x}\n")
        return render_template('tableNames.html', tableNames=sorted(tableNames))
    return redirect(url_for('dbConnErr'))

# ** CONNECT TO REMOTE SPARROW DATABASE (work in progress) **
@app.route('/login', methods=["GET","POST"])
def login():
    if request.method == 'POST':
        user = request.form['user']
        password = request.form['password']
        host = request.form['host']
        port = request.form['port']
        database = request.form['database']

        if not user:
            flash('user is required!')
        elif not host:
            flash('host is required!')
        elif not port:
            flash('port is required!')
        elif not database:
            flash('database is required!')
        else:
            dbConnection = db.createConnection(user, host, port, database, password)
            if not dbConnection:
                flash("couldn't connect to database!")
            else:
                return redirect(url_for('dashboard'))
            # app.logger.info(f"user-{user},pasword-{password},host-{host},port-{port},databse-{database}")
            return redirect(url_for('index'))

    return render_template('login.html')

if __name__ == '__main__':
	app.run(debug=True)
