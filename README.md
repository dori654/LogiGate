## LogiGate

# https://dori654.github.io/LogiGate/

Contact information:
leon44ml@gmail.com		- Leon	Yarovinski
Matandaniel123@gmail.com	- Matan Daniel
Dani.grunin@gmail.com		- Daneil Grunin
dorifo@ac.sce.ac.il		- Dori Fourer

Description:
A logic gate simulator. HTML website with python backend.

Environment:
Python interpreter, Web Browser

Requirements:
Required python packages: [Flask], [Flask-SQLAlchemy]


How to Run Your Program:
1. Make sure database.db is located under [db] folder
2. Import the required python packages
3. Run main.py
4. Copy the IP adress from the console output when the server loads (should be 127.0.0.1:5000)
5. Use the IP address in a web browser to view the website.

In case the database does not exist:
1. Use python console inside the folder environment
2. >>> from main import db
3. >>> db.create_all()

##IMPORTANT: When performing actions such as adding users, activities or else, make sure to go back one page and refresh it.
